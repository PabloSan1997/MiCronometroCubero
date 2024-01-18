import {DataSource} from 'typeorm';
import { variables } from '../utilities/variablesEnv';
import { Resoluciones } from './models/Resoluciones';
import { Usuario } from './models/Usuario';
import { Promedio } from './models/Promedios';


export const AppDataSource = new DataSource({
	type:'postgres',
	url:variables.db_url,
	synchronize: true,
	logging: false,
	entities:[Resoluciones, Usuario, Promedio]
});