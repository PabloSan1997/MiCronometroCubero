import {Express, Router} from 'express';
import { usuarioRoute } from './usuario.routes';

const mainRouter = Router();

export function createApi(app:Express):void{
	app.use('/api/v1', mainRouter);
	mainRouter.use('/user', usuarioRoute);
	mainRouter.get('/', (req, res)=>{
		res.json({message:'Hi'});
	});
}