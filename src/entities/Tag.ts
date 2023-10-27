import { tagSchema } from "../schemas/tagSchema";
import { EntityBase } from "./EntityBase";

export interface TagProps {
	id?: string;
	name: string;
}

export class Tag extends EntityBase<TagProps> {
	private props: TagProps;

	constructor(props: TagProps) {
		super();
		this.props = { ...props, id: super.id };
		super.validate(tagSchema, this.props);
	}

	get name() {
		return this.props.name;
	}
}
