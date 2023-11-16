import { Knex } from "knex";
import { database } from "../database";

export abstract class RepositoryBase<T> {
	protected readonly tableName: string;
	protected database: Knex;

	constructor(tableName: string) {
		this.tableName = tableName;
		this.database = database;
	}

	abstract insert(item: T): Promise<string>;

	async selectById(id: string): Promise<T> {
		return await this.database(this.tableName).where("id", id).first();
	}

	async selectAll(page: number, limit: number): Promise<T[]> {
		const offset = (page - 1) & limit;
		return await this.database(this.tableName)
			.select()
			.offset(offset)
			.limit(limit);
	}

	abstract update(item: Partial<T>, id: string): Promise<boolean>;

	async delete(id: string): Promise<boolean> {
		return (await this.database(this.tableName).where("id", id).del()) > 0;
	}
}
