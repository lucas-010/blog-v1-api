import { Article } from "../../entities/Article";
import { User } from "../../entities/User";
import { ArticleRepository } from "../ArticleRepository";

describe("Article - Repository", () => {
	const articleRepository = new ArticleRepository();
	const user = new User({
		name: "Test User",
		email: "test@gmail.com",
		password: "12345678",
	});

	it("should return an id when inserting a article", async () => {
		const article = new Article({
			title: "Test title",
			body: "Test Test",
			userId: user.id,
		});
		const result = await articleRepository.insert({
			body: article.body,
			title: article.title,
			userId: article.userId,
			id: article.id,
			published: article.published,
		});
		expect(result).toEqual(article.id);
		await articleRepository.delete(article.id);
	});

	it("should return an article when searching by name", async () => {
		const article = new Article({
			title: "Test title",
			body: "Test Test",
			userId: user.id,
		});
		await articleRepository.insert({
			body: article.body,
			title: article.title,
			userId: article.userId,
			id: article.id,
			published: article.published,
		});
		const result = await articleRepository.selectByTitle("Test", 1, 2);

		expect(result[0].title).toEqual(article.title);
	});
});
