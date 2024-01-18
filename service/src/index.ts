import 'reflect-metadata';
import { AppDataSource } from './config/db';


AppDataSource.initialize()
	.then(() => console.log('Conectado a la base de datos'))
	.catch(error => console.error(error));