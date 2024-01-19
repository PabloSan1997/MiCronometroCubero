import { UsuarioController } from '../controllers/Usuario.controller';
import express from 'express';
import { joiHandle } from '../middleware/joiHandel';
import { addUserJoi, loginJoi } from '../middleware/joiSchemas/userSchema';

export const usuarioRoute = express.Router();
const controller = new UsuarioController();

usuarioRoute.post('/',
	joiHandle(addUserJoi, 'body'),
	controller.addUser);

usuarioRoute.post('/login',
	joiHandle(loginJoi, 'body'),
	controller.logiUser);