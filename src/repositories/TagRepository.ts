import { Tag, TagProps } from "../entities/Tag";
import { RepositoryBase } from "./RepositoryBase";

export class TagRepository extends RepositoryBase<Tag> {
	constructor() {
		super("tag");
	}

	async insert(item: TagProps): Promise<string> {
		return (await this.database(this.tableName).insert(item).returning("id"))[0]
			.id;
	}

	async selectByName(name: string): Promise<Tag> {
		return (
			await this.database(this.tableName).where("name", name).select("*")
		)[0];
	}

	async update(item: Omit<TagProps, "id">, id: string): Promise<boolean> {
		return (
			(await this.database(this.tableName).where("id", id).update(item)) > 0
		);
	}
}
