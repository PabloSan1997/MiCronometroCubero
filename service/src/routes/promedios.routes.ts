import { PromedioController } from '../controllers/Promedio.controller';
import express from 'express';

export const promedioRouter = express.Router();
const controller = new PromedioController();

promedioRouter.post('/', controller.addPromedio);
