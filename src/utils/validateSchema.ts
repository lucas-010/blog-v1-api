import { ZodType } from "zod";

export function validate<T>(schema: ZodType<T>, data: T) {
	const result = schema.safeParse(data);
	if (!result.success) {
		throw new Error(JSON.stringify(result.error.errors));
	}
	return true;
}
