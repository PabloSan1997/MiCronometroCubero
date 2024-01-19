import { PromedioService } from '../services/promedios.service';
import { Request, Response } from 'express';

const service = new PromedioService();
export class PromedioController {
	async addPromedio(req: Request, res: Response) {
		try {
			const data = req.body as AddPromRes;
			const {authorization} = req.headers as {authorization:string};
			const ver = await service.addPromedio(data, authorization);
			res.json(ver);
		} catch (error) {
			res.json(error);
		}
	}
}