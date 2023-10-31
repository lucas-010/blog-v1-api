import { articleSchema } from "../schemas/articleSchema";
import { v4 as uuid } from "uuid";
import { validate } from "../utils/validateSchema";

export interface ArticleProps {
	id?: string;
	title: string;
	body: string;
	published?: Date;
	userId: string;
}

export class Article {
	private props: ArticleProps;

	constructor(props: ArticleProps) {
		this.props = { ...props, id: uuid(), published: new Date() };
		validate(articleSchema, this.props);
	}

	get id() {
		return String(this.props.id);
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
