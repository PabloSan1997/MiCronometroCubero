import { UsuarioService } from '../services/usuario.service';
import { Request, Response } from 'express';

const servicio = new UsuarioService();
export class UsuarioController {
	async addUser(req: Request, res: Response) {
		const usuario = req.body as AddUserInterface;
		const response = await servicio.addUser(usuario);
		res.status(201).json(response);
	}
	async logiUser(req: Request, res: Response) {
		try {
			const login = req.body;
			const response = await servicio.loginUser(login);
			res.json(response);
		} catch (error) {
			res.status(400).json({ message: error });
		}
	}
}