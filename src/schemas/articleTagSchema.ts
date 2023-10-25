import { z } from "zod";

export const articleTagSchema = z.object({
	id: z.string().uuid({ message: "Deve ser um ID único universal" }),
	articleId: z.string().uuid({ message: "Deve ser um ID único universal" }),
	tagId: z.string().uuid({ message: "Deve ser um ID único universal" }),
});
