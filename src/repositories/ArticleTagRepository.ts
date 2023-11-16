import { ArticleTag, ArticleTagProps } from "../entities/ArticleTag";
import { RepositoryBase } from "./RepositoryBase";

export class ArticleTagRepository extends RepositoryBase<ArticleTag> {
	constructor() {
		super("article-tag");
	}

	async insert(item: ArticleTagProps): Promise<string> {
		return (await this.database(this.tableName).insert(item).returning("id"))[0]
			.id;
	}

	async update(item: Partial<ArticleTagProps>, id: string): Promise<boolean> {
		return (
			(await this.database(this.tableName).where("id", id).update(item)) > 0
		);
	}
}
