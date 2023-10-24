import { z } from "zod";

export const articleTagSchema = z.object({
	id: z.string().uuid(),
	articleId: z.string().uuid(),
	tagId: z.string().uuid(),
});
