import { database } from "./src/database";

beforeAll(async () => {
	await database.migrate.latest();
	await database.seed.run();
});

afterAll(async () => {
	await database.destroy();
});
