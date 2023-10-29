import { Comment } from "../Comment";
import { validate } from "uuid";
import { User } from "../User";
import { Article } from "../Article";

describe("Comment - Entity", () => {
	let comment: Comment;
	let user: User;
	let article: Article;

	const commentValidData = {
		text: "Text comment",
	};

	const userValidData = {
		name: "User test",
		email: "user@test.com",
		password: "12345678",
	};

	const articleValidData = {
		title: "Title Article",
		body: "Test Test",
	};

	beforeEach(() => {
		user = new User(userValidData);
		article = new Article({ ...articleValidData, userId: user.id });
		comment = new Comment({
			...commentValidData,
			articleId: article.id,
			userId: user.id,
		});
	});

	it("should be an instance of Comment", () => {
		expect(comment).toBeInstanceOf(Comment);
	});

	it("should have a valid UUID after creation", () => {
		expect(validate(comment.id)).toEqual(true);
	});

	it("should have a user id as UUID valid", () => {
		expect(validate(comment.userId)).toEqual(true);
	});

	it("should have a article id as UUID valid", () => {
		expect(validate(comment.articleId)).toEqual(true);
	});

	it("should have a text equal to Text comment", () => {
		expect(comment.text).toEqual("Text comment");
	});

	it("should return an error when passing a empty text", () => {
		try {
			new Comment({ text: "", articleId: article.id, userId: user.id });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("text");
		}
	});

	it("should return an error when passing a text with 1 character", () => {
		try {
			new Comment({ text: "T", articleId: article.id, userId: user.id });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("text");
		}
	});

	it("should return an error when passing a article id as uuid invalid", () => {
		try {
			new Comment({
				text: "Text comment",
				articleId: "Invalid id",
				userId: user.id,
			});
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("articleId");
		}
	});

	it("should return an error when passing a user id as uuid invalid", () => {
		try {
			new Comment({
				text: "Text comment",
				articleId: article.id,
				userId: "Invalid id",
			});
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("userId");
		}
	});
});
