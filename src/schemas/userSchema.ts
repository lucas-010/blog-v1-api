import { z } from "zod";

export const userSchema = z.object({
	id: z.string().uuid({ message: "Deve ser um ID único universal" }),
	name: z
		.string()
		.min(1, { message: "Deve ter no mínimo 1 caractere" })
		.max(100, { message: "Deve ter no máximo 100 caracteres" }),
	email: z.string().email({ message: "Deve ser um e-mail válido" }),
	password: z
		.string()
		.min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
});

export const userSchemaOptional = z.object({
	name: z
		.string()
		.min(1, { message: "Deve ter no mínimo 1 caractere" })
		.max(100, { message: "Deve ter no máximo 100 caracteres" })
		.optional(),
	password: z
		.string()
		.min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
		.optional(),
});
