import { tagSchema } from "../schemas/tagSchema";
import { v4 as uuid } from "uuid";
import { validate } from "../utils/validateSchema";

export interface TagProps {
	id?: string;
	name: string;
}

export class Tag {
	private props: TagProps;

	constructor(name: string, id?: string) {
		this.props = { name: name, id: id || uuid() };
		validate(tagSchema, this.props);
	}

	get id() {
		return String(this.props.id);
	}

	get name() {
		return this.props.name;
	}
}
