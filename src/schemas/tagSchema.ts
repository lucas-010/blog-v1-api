import { z } from "zod";

export const tagSchema = z.object({
	id: z.string().uuid({ message: "Deve ser um ID único universal" }),
	name: z
		.string()
		.min(2, "Deve ter no mínimo 2 caracteres")
		.max(20, "Deve ter no máximo 20 caracteres"),
});

export const tagSchemaOptional = z.object({
	name: z
		.string()
		.min(2, "Deve ter no mínimo 2 caracteres")
		.max(20, "Deve ter no máximo 20 caracteres")
		.optional(),
});
