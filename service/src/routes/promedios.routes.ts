import { PromedioController } from '../controllers/Promedio.controller';
import express from 'express';
import { joiHandle } from '../middleware/joiHandel';
import { addResolucionJoi, idPromJoi } from '../middleware/joiSchemas/addResolucionesSchema';

export const promedioRouter = express.Router();
const controller = new PromedioController();

promedioRouter.post('/',
	joiHandle(addResolucionJoi, 'body'),
	controller.addPromedio);

promedioRouter.get('/', controller.leerDatos);

promedioRouter.get('/last', controller.leerUltimoDato);

promedioRouter.delete('/:id_prom',
	joiHandle(idPromJoi, 'params'),
	controller.eliminarElemento);

promedioRouter.get('/plot', controller.leerPromediosGrafica);