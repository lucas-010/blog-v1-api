import { z } from "zod";

export const commentSchema = z.object({
	id: z.string().uuid(),
	title: z.string().min(2),
	body: z.string(),
	published: z.date(),
	userId: z.string().uuid(),
});
