import { v4 as uuid } from "uuid";
import { ZodType } from "zod";

export abstract class EntityBase<T> {
	private readonly _id: string;

	constructor() {
		this._id = uuid();
	}

	get id() {
		return this._id;
	}

	validate(schema: ZodType<T>, data: T) {
		const result = schema.safeParse(data);
		if (!result.success) {
			const errorMessages = result.error.errors.map((error) => error.message);
			throw new Error(`Erros de validação: ${errorMessages.join(", ")}`);
		}
		return true;
	}
}
