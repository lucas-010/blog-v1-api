import { EntityBase } from "./EntityBase";
import { articleSchema } from "../schemas/articleSchema";

export interface ArticleProps {
	id?: string;
	title: string;
	body: string;
	published?: Date;
	userId: string;
}

export class Article extends EntityBase<ArticleProps> {
	private props: ArticleProps;

	constructor(props: ArticleProps) {
		super();
		this.props = { ...props, id: super.id, published: new Date() };
		super.validate(articleSchema, this.props);
	}

	get title() {
		return this.props.title;
	}

	get body() {
		return this.props.body;
	}

	get published() {
		return this.props.published;
	}

	get userId() {
		return this.props.userId;
	}
}
