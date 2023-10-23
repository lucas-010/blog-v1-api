import { Knex } from "knex";

export const up = async (knex: Knex) => {
	await knex.schema
		.createTable("tag", (table) => {
			table.string("id").primary().index();
			table.string("name").notNullable().unique().index().checkLength(">=", 2);
		})
		.then(() => {
			console.log("# Created table tag");
		});
};

export const down = async (knex: Knex) => {
	await knex.schema.dropTable("tag").then(() => {
		console.log("# Dropped table tag");
	});
};
