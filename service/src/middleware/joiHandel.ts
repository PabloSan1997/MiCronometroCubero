
import { Request, Response, NextFunction } from 'express';
import {Schema} from 'joi';
import Boom from '@hapi/boom';

export function joiHandle(schema:Schema, prop:'body'|'headers'|'params') {
	return (req: Request, res: Response, next: NextFunction) => {
		const cuerpo = req[prop];
		const { error } = schema.validate(cuerpo, { abortEarly: false });
		if(error){
			next(Boom.badRequest(error.message));
		}else{
			next();
		}
	};
}   