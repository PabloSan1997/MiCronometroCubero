import { UsuarioController } from '../controllers/Usuario.controller';
import express from 'express';

export const usuarioRoute = express.Router();
const controller = new UsuarioController();

usuarioRoute.post('/', controller.addUser);
usuarioRoute.post('/login', controller.logiUser);