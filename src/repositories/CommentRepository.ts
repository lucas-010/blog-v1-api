import { Comment, CommentProps } from "../entities/Comment";
import { RepositoryBase } from "./RepositoryBase";

export class CommentRepository extends RepositoryBase<Comment> {
	constructor() {
		super("comment");
	}

	async insert(item: CommentProps): Promise<string> {
		return (await this.database(this.tableName).insert(item).returning("id"))[0]
			.id;
	}

	async update(item: Partial<CommentProps>, id: string): Promise<boolean> {
		return (
			(await this.database(this.tableName).where("id", id).update(item)) > 0
		);
	}

	async selectByArticleId(
		id: string,
		page: number,
		limit: number,
	): Promise<Comment[]> {
		const offset = (page - 1) & limit;
		return await this.database(this.tableName)
			.select()
			.where("articleId", id)
			.offset(offset)
			.limit(limit);
	}
}
