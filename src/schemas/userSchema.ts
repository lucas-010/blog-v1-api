import { z } from "zod";

export const userSchema = z.object({
	id: z.string().uuid(),
	name: z.string().min(3).max(100),
	email: z.string().email().min(5),
	password: z.string().min(8),
});
