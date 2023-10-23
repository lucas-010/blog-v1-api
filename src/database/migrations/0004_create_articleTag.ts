import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
	await knex.schema
		.createTable("article-tag", (table) => {
			table.string("id").primary().index();
			table.string("articleId").unsigned();
			table.foreign("articleId").references("article.id");
			table.string("tagId").unsigned();
			table.foreign("tagId").references("tag.id");
		})
		.then(() => {
			console.log("# Created table article-tag");
		});
};

export const down = async (knex: Knex): Promise<void> => {
	await knex.schema.dropTable("article-tag").then(() => {
		console.log("# Dropped table article-tag");
	});
};
