import { Article, ArticleProps } from "../entities/Article";
import { RepositoryBase } from "./RepositoryBase";

export class ArticleRepository extends RepositoryBase<Article> {
	constructor() {
		super("article");
	}

	async insert(item: ArticleProps): Promise<string> {
		return (await this.database(this.tableName).insert(item).returning("id"))[0]
			.id;
	}

	async update(item: Partial<ArticleProps>, id: string): Promise<boolean> {
		return (
			(await this.database(this.tableName).where("id", id).update(item)) > 0
		);
	}

	async selectByTitle(
		title: string,
		page: number,
		limit: number,
	): Promise<Article[]> {
		const offset = (page - 1) & limit;
		const lowercaseTitle = title.toLowerCase();

		return await this.database(this.tableName)
			.whereRaw("LOWER(title) LIKE ?", [`%${lowercaseTitle}%`])
			.select()
			.offset(offset)
			.limit(limit);
	}
}
