import { z } from "zod";

export const commentSchema = z.object({
	id: z.string().uuid({ message: "Deve ser um ID único universal" }),
	title: z.string().min(2, { message: "Deve ter no mínimo 2 caracteres" }),
	text: z.string().min(1, { message: "Deve ter no mínimo 1 caractere" }),
	published: z.date(),
	articleId: z.string().uuid({ message: "Deve ser um ID único universal" }),
	userId: z.string().uuid({ message: "Deve ser um ID único universal" }),
});
