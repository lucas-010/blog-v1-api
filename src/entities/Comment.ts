import { commentSchema } from "../schemas/commentSchema";
import { v4 as uuid } from "uuid";
import { validate } from "../utils/validateSchema";

export interface CommentProps {
	id?: string;
	text: string;
	published?: Date;
	userId: string;
	articleId: string;
}

export class Comment {
	private props: CommentProps;

	constructor(props: CommentProps) {
		this.props = { ...props, id: uuid(), published: new Date() };
		validate(commentSchema, this.props);
	}

	get id() {
		return String(this.props.id);
	}

	get text() {
		return this.props.text;
	}

	get userId() {
		return this.props.userId;
	}

	get articleId() {
		return this.props.articleId;
	}
}
