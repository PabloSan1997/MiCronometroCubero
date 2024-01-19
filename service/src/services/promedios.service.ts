import { Promedio } from '../config/models/Promedios';
import { Resoluciones } from '../config/models/Resoluciones';
import { AppDataSource } from '../config/db';
import { calcularPromedio } from '../utilities/calcularPromedio';
import { UsuarioService } from './usuario.service';

const rePromedio = AppDataSource.getRepository(Promedio);
const reResolucion = AppDataSource.getRepository(Resoluciones);

const serviciosUsuario = new UsuarioService();

export class PromedioService {
	async addPromedio(data: AddPromRes, authorization:string) {
		const usuario = await serviciosUsuario.buscarUsuario(authorization);
		if(!usuario) throw 'no tienes permiso para esta accion';
		const promedio = calcularPromedio(data);
		if(promedio.avo5!=0){
			const nuevoPromedio = rePromedio.create(promedio);
			nuevoPromedio.usuario = usuario;
			await rePromedio.save(nuevoPromedio);
			const respuestas = data.resolucion.map(p=>{
				const resp = reResolucion.create(p);
				resp.promedio = nuevoPromedio;
				return resp;
			});
			await reResolucion.save(respuestas);
			const buscar = await rePromedio.findOne({
				where:{id_prom:nuevoPromedio.id_prom},
				relations:{
					resoluciones:true,
				}
			});
			const mostrar = {...usuario,password:''};
			
			return {...buscar, usuario:mostrar};
		}
		throw 'Problemas para agregar datos';
	}
}