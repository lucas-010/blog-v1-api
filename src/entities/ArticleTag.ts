import { v4 as uuid } from "uuid";

export class ArticleTag {
	private readonly id: string;
	private tagId: string;
	private articleId: string;

	constructor(tagId: string, articleId: string) {
		this.id = uuid();
		this.tagId = tagId;
		this.articleId = articleId;
	}

	getId() {
		return this.id;
	}

	getTagId() {
		return this.tagId;
	}

	getArticleId() {
		return this.articleId;
	}
}
