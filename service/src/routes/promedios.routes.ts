import { PromedioController } from '../controllers/Promedio.controller';
import express from 'express';

export const promedioRouter = express.Router();
const controller = new PromedioController();

promedioRouter.post('/', controller.addPromedio);
promedioRouter.get('/', controller.leerDatos);
promedioRouter.get('/last', controller.leerUltimoDato);
promedioRouter.delete('/:id_prom', controller.eliminarElemento);