import jwt from 'jsonwebtoken';
import { variables } from './variablesEnv';


export async function convertirToken(data: PermisoInterface): Promise<string> {
	const token = jwt.sign(data, variables.key_jwt as string);
	return token;

}
export async function codificarToken(token: string): Promise<PermisoInterface> {
	const data = jwt.verify(token, variables.key_jwt as string) as PermisoInterface;
	return data;
}