import { variables } from '../utilities/variablesEnv';
import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';

export function authkeyhand(req: Request, _res: Response, next: NextFunction) {
	const { allow } = req.headers as { allow: string };
	if (allow !== variables.key_allow) {
		next(Boom.unauthorized('No tienes autorizacion'));
	} else {
		next();
	}
}