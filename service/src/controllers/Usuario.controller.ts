import { UsuarioService } from '../services/usuario.service';
import { Request, Response, NextFunction } from 'express';

const servicio = new UsuarioService();
export class UsuarioController {
	async addUser(req: Request, res: Response, next: NextFunction) {
		try {
			const usuario = req.body as AddUserInterface;
			const response = await servicio.addUser(usuario);
			res.status(201).json(response);
		} catch (error) {
			next(error);
		}
	}
	async logiUser(req: Request, res: Response, next:NextFunction) {
		try {
			const login = req.body;
			const response = await servicio.loginUser(login);
			res.json(response);
		} catch (error) {
			next(error);
		}
	}
}