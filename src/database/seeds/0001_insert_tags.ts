import { Knex } from "knex";

export const seed = async (knex: Knex) => {
	const [{ count }] =
		await knex("tag").count<[{ count: number }]>("* as count");

	if (!Number.isInteger(count) || Number(count) > 0) return;
	const tagsToInsert = tags.map((nameTag) => ({
		name: nameTag,
	}));
	await knex("tag").insert(tagsToInsert);
};

const tags = [
	"Alimentação",
	"Meio Ambiente",
	"Automóveis",
	"Família",
	"Finanças",
	"História",
	"Tutoriais",
	"Dicas de Estudo",
	"Viagens",
	"Culinária",
	"Animais de Estimação",
	"Música",
	"Livros",
];
