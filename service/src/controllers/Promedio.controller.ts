import { PromedioService } from '../services/promedios.service';
import { Request, Response, NextFunction } from 'express';

const service = new PromedioService();
export class PromedioController {
	async addPromedio(req: Request, res: Response, next: NextFunction) {
		try {
			const data = req.body as AddPromRes;
			const { authorization } = req.headers as { authorization: string };
			const ver = await service.addPromedio(data, authorization);
			res.status(201).json(ver);
		} catch (error) {
			next(error);
		}
	}
	async leerDatos(req: Request, res: Response, next: NextFunction) {
		try {
			const { authorization } = req.headers as { authorization: string };
			const datos = await service.leerPromedios(authorization);
			res.json(datos);
		} catch (error) {
			next(error);
		}
	}
	async leerUltimoDato(req: Request, res: Response, next: NextFunction) {
		try {
			const { authorization } = req.headers as { authorization: string };
			const datos = await service.leerUltimoPromedio(authorization);
			res.json(datos);
		} catch (error) {
			next(error);
		}
	}
	async leerPromediosGrafica(req: Request, res: Response, next: NextFunction){
		try {
			const { authorization } = req.headers as { authorization: string };
			const datos = await service.leerPromediosGrafica(authorization);
			res.json(datos);
		} catch (error) {
			next(error);
		}
	}
	async eliminarElemento(req: Request, res: Response, next: NextFunction) {
		try {
			const { authorization } = req.headers as { authorization: string };
			const { id_prom } = req.params as { id_prom: string };
			const datos = await service.eliminarPromedio(authorization, id_prom);
			res.json(datos);
		} catch (error) {
			next(error);
		}
	}
}