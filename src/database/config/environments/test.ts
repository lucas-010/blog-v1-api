import { Knex } from "knex";
import path from "path";

export const test: Knex.Config = {
	client: "sqlite3",
	connection: ":memory:",
	migrations: {
		directory: path.resolve(__dirname, "..", "..", "migrations"),
	},
	useNullAsDefault: false,
	seeds: {
		directory: path.resolve(__dirname, "..", "..", "seeds"),
	},
};
