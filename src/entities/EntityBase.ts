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

	protected validate(schema: ZodType<T>, data: T) {
		const result = schema.safeParse(data);
		if (!result.success) {
			throw new Error(JSON.stringify(result.error.errors));
		}
		return true;
	}
}
