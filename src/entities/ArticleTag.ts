import { articleTagSchema } from "../schemas/articleTagSchema";
import { EntityBase } from "./EntityBase";

export interface ArticleTagProps {
	id?: string;
	tagId: string;
	articleId: string;
}

export class ArticleTag extends EntityBase<ArticleTagProps> {
	private props: ArticleTagProps;

	constructor(props: ArticleTagProps) {
		super();
		this.props = { ...props, id: super.id };
		super.validate(articleTagSchema, this.props);
	}

	get tagId() {
		return this.props.tagId;
	}

	get articleId() {
		return this.props.articleId;
	}
}
