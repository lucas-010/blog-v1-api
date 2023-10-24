import { v4 as uuid } from "uuid";

export class Article {
	private readonly id: string;
	private title: string;
	private body: string;
	private published: Date;
	private userId: string;

	constructor(title: string, body: string, userId: string) {
		this.id = uuid();
		this.title = title;
		this.body = body;
		this.published = new Date();
		this.userId = userId;
	}

	getId() {
		return this.id;
	}

	getTitle() {
		return this.title;
	}

	getBody() {
		return this.body;
	}

	getPublished() {
		return this.published;
	}

	getUserId() {
		return this.userId;
	}
}
