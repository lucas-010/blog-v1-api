import { Knex } from "knex";

export interface IRepository<T> {
	readonly tableName: string;
	readonly database: Knex;

	insert(item: T): Promise<string>;
	selectById(id: string): Promise<T>;
	selectAll(): Promise<T[]>;
	update(item: Partial<T>): Promise<boolean>;
	delete(id: string): Promise<boolean>;
}
