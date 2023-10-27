import { Knex } from "knex";
import path from "path";

export const production: Knex.Config = {
	client: "pg",
	connection: {
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: "questions-answers-v1",
	},
	migrations: {
		directory: path.resolve(__dirname, "..", "..", "migrations"),
	},
	seeds: {
		directory: path.resolve(__dirname, "..", "..", "seeds"),
	},
};
