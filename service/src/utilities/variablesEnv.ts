import 'dotenv/config';

export const variables = {
	port: process.env.PORT || 4000,
	db_url: process.env.DB_URL
};