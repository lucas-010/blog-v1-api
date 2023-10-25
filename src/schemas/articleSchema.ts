import { z } from "zod";

export const articleSchema = z.object({
	id: z.string().uuid({ message: "Deve ser um ID único universal" }),
	title: z.string().min(2, { message: "Deve ter no mínimo 2 caracteres" }),
	body: z.string().min(1, { message: "Deve ter no mínimo 1 caractere" }),
	published: z.date(),
	userId: z.string().uuid({ message: "Deve ser um ID único universal" }),
});
