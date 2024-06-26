import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
	await knex.schema
		.createTable("article", (table) => {
			table.string("id").primary().index();
			table.string("title").index().notNullable().checkLength(">=", 2);
			table.text("body").notNullable();
			table.date("published").notNullable().defaultTo(knex.raw("CURRENT_DATE"));
			table.string("userId");
			table.foreign("userId").references("user.id");
		})
		.then(() => {
			console.log("# Created table article");
		});
};

export const down = async (knex: Knex): Promise<void> => {
	await knex.schema.dropTable("article").then(() => {
		console.log("# Dropped table article");
	});
};
