import { z } from "zod";

export const articleSchema = z.object({
	id: z.string().uuid(),
	text: z.string(),
	articleId: z.string().uuid(),
	userId: z.string().uuid(),
});
