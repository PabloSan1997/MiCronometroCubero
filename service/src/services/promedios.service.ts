import { Promedio } from '../config/models/Promedios';
import { Resoluciones } from '../config/models/Resoluciones';
import { AppDataSource } from '../config/db';
import { calcularPromedio } from '../utilities/calcularPromedio';
import { UsuarioService } from './usuario.service';
import Boom from '@hapi/boom';

const rePromedio = AppDataSource.getRepository(Promedio);
const reResolucion = AppDataSource.getRepository(Resoluciones);

const serviciosUsuario = new UsuarioService();

export class PromedioService {
	async addPromedio(data: AddPromRes, authorization: string) {
		const usuario = await serviciosUsuario.buscarUsuario(authorization);
		if (!usuario) throw Boom.unauthorized('No tienes permiso para esta accion');
		const promedio = calcularPromedio(data);
		if (promedio.avo5 != 0) {
			const nuevoPromedio = rePromedio.create(promedio);
			nuevoPromedio.usuario = usuario;
			await rePromedio.save(nuevoPromedio);
			const respuestas = data.resolucion.map(p => {
				const resp = reResolucion.create(p);
				resp.promedio = nuevoPromedio;
				return resp;
			});
			await reResolucion.save(respuestas);
			const buscar = await rePromedio.findOne({
				where: { id_prom: nuevoPromedio.id_prom },
				relations: {
					resoluciones: true,
				}
			});
			const mostrar = { ...usuario, password: '' };

			return { ...buscar, usuario: mostrar };
		}
		throw Boom.badRequest('Datos erroneos');
	}
	async leerPromedios(token: string) {
		const usuario = await serviciosUsuario.buscarUsuario(token);
		if (!usuario) throw Boom.badRequest('No tienes permiso');
		const datos = await rePromedio.find({
			where: { usuario: usuario },
			relations: { resoluciones: true }
		});
		return datos;
	}
	async leerPromediosGrafica(token: string) {
		const usuario = await serviciosUsuario.buscarUsuario(token);
		if (!usuario) throw Boom.badRequest('No tienes permiso');
		const datos = await rePromedio.find({
			where: { usuario: usuario },
			relations: {
				resoluciones: true
			},
			select: {
				avo5: true,
				fecha: true,
				resoluciones: {
					tipo: true
				}
			},
			order: {
				fecha: 'ASC'
			}
		});
		const respuesta: ResultadosGrafica[] = datos.map(p => {
			const { avo5, fecha, resoluciones } = p;
			const tipo = resoluciones[0].tipo;
			return { avo5, fecha, tipo };
		});
		return respuesta;
	}
	async leerUltimoPromedio(token: string) {
		const usuario = await serviciosUsuario.buscarUsuario(token);
		if (!usuario) throw Boom.badRequest('No tienes permiso');
		const datos = await rePromedio.find({
			where: { usuario: usuario },
			relations: { resoluciones: true },
			order: {
				fecha: 'DESC'
			},
			take: 1
		});
		if (datos.length === 0) throw Boom.notFound('No se encontro elemento');
		return datos;
	}
	async eliminarPromedio(token: string, id_prom: string) {
		const datos = await this.leerPromedios(token);
		const buscar = datos.find(p => p.id_prom === id_prom);
		if (buscar) {
			const resoluciones = buscar.resoluciones;
			await Promise.all(resoluciones.map(async p => {
				await reResolucion.delete(p);
			}));
			await rePromedio.delete({ id_prom });
		}
	}
}