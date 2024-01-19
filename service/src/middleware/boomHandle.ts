import boom, { Boom } from '@hapi/boom';
import { Request, Response, NextFunction } from 'express';

export function boomHandle(error: Boom, req: Request, res: Response, next:NextFunction) {
	if (error.isBoom) {
		const { payload } = error.output;
		res.status(payload.statusCode).json(payload);
	} else {
		const data = boom.badImplementation();
		res.status(data.output.statusCode).json(data.output.payload);
	}
	next();
}
