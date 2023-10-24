import { v4 as uuid } from "uuid";

export class Comment {
	private readonly id: string;
	private text: string;
	private userId: string;
	private articleId: string;

	constructor(text: string, userId: string, articleId: string) {
		this.id = uuid();
		this.text = text;
		this.userId = userId;
		this.articleId = articleId;
	}

	getId() {
		return this.id;
	}

	getText() {
		return this.text;
	}

	getUserId() {
		return this.userId;
	}

	getArticleId() {
		return this.articleId;
	}
}
