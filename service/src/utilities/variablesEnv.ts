import 'dotenv/config';

export const variables = {
	port: process.env.PORT || 4000,
	db_url: process.env.DB_URL,
	mode_project: process.env.MODE_PROYECT,
	key_jwt:process.env.KEY_JWT
};