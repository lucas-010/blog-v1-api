import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
	await knex.schema
		.createTable("comment", (table) => {
			table.string("id").primary().index();
			table.text("text").notNullable();
			table.date("published").notNullable().defaultTo(knex.raw("CURRENT_DATE"));
			table.string("articleId").unsigned();
			table.foreign("articleId").references("article.id");
			table.string("userId").unsigned();
			table.foreign("userId").references("user.id");
		})
		.then(() => {
			console.log("# Created table comment");
		});
};

export const down = async (knex: Knex): Promise<void> => {
	await knex.schema.dropTable("comment").then(() => {
		console.log("# Dropped table comment");
	});
};
