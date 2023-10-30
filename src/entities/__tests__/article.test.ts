import { validate } from "uuid";
import { Article } from "../Article";
import { User } from "../User";

describe("Article - Entity", () => {
	let article: Article;
	let user: User;

	const userValidData = {
		name: "User Test",
		email: "user@test.com",
		password: "12345678",
	};

	const articleValidData = {
		title: "Test Title",
		body: "Test Body",
	};

	beforeEach(() => {
		user = new User(userValidData);
		article = new Article({ ...articleValidData, userId: user.id });
	});

	it("should be an instance of article", () => {
		expect(article).toBeInstanceOf(Article);
	});

	it("should have a valid UUID", () => {
		expect(validate(article.id)).toEqual(true);
	});

	it("should have a title to equal a Test Title", () => {
		expect(article.title).toEqual("Test Title");
	});

	it("should have a body to equal Test Body", () => {
		expect(article.body).toEqual("Test Body");
	});

	it("should returning an error when passing a empty title", () => {
		try {
			new Article({ title: "", body: "Test Test", userId: user.id });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(formatError[0].path[0]).toEqual("title");
		}
	});

	it("should returning an error when passing a empty body", () => {
		try {
			new Article({ title: "Test Title", body: "", userId: user.id });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(formatError[0].path[0]).toEqual("body");
		}
	});

	it("should returning an error when passing a title with 1 character", () => {
		try {
			new Article({ title: "T", body: "Test Test", userId: user.id });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(formatError[0].path[0]).toEqual("title");
		}
	});

	it("should returning an error when passing a body with 1 character", () => {
		try {
			new Article({ title: "Test Title", body: "T", userId: user.id });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(formatError[0].path[0]).toEqual("title");
		}
	});

	it("should returning an error when passing a user id as UUID invalid", () => {
		try {
			new Article({
				title: "Test Title",
				body: "Test Test",
				userId: "Invalid Id",
			});
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(formatError[0].path[0]).toEqual("userId");
		}
	});
});
