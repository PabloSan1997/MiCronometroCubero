import { PromedioService } from '../services/promedios.service';
import { Request, Response } from 'express';

const service = new PromedioService();
export class PromedioController{
	async addPromedio(req: Request, res: Response){
		const data = req.body as object[];
		const ver = await service.addPromedio(data);
		res.json(ver);
	}
}