import { EntityBase } from "./EntityBase";
import { commentSchema } from "../schemas/commentSchema";

export interface CommentProps {
	id?: string;
	text: string;
	published?: Date;
	userId: string;
	articleId: string;
}

export class Comment extends EntityBase<CommentProps> {
	private props: CommentProps;

	constructor(props: CommentProps) {
		super();
		this.props = { ...props, id: super.id, published: new Date() };
		super.validate(commentSchema, this.props);
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
