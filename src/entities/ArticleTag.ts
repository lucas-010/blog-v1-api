import { articleTagSchema } from "../schemas/articleTagSchema";
import { v4 as uuid } from "uuid";
import { validate } from "../utils/validateSchema";

export interface ArticleTagProps {
	id?: string;
	tagId: string;
	articleId: string;
}

export class ArticleTag {
	private props: ArticleTagProps;

	constructor(props: ArticleTagProps) {
		this.props = { ...props, id: props.id || uuid() };
		validate(articleTagSchema, this.props);
	}

	get id() {
		return String(this.props.id);
	}

	get tagId() {
		return this.props.tagId;
	}

	get articleId() {
		return this.props.articleId;
	}
}
