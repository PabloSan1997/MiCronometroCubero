import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createApi } from './routes/main';
import { variables } from './utilities/variablesEnv';
import { AppDataSource } from './config/db';
import { boomHandle } from './middleware/boomHandle';
import { authkeyhand } from './middleware/autykeyhandle';


const app = express();
app.use('/', express.static('src/build'));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(authkeyhand);

createApi(app);

app.use(boomHandle);


AppDataSource.initialize()
	.then(() => {
		app.listen(variables.port, () => {
			if (variables.mode_project === 'admin') {
				console.log(`http://localhost:${variables.port}`);
			}
		});
	})
	.catch(error => console.error(error));