import { User, UserProps } from "../entities/User";
import { RepositoryBase } from "./RepositoryBase";

export class UserRepository extends RepositoryBase<User> {
	constructor() {
		super("user");
	}

	async insert(item: UserProps): Promise<string> {
		return (await this.database(this.tableName).insert(item).returning("id"))[0]
			.id;
	}

	async update(item: Partial<UserProps>, id: string): Promise<boolean> {
		return (
			(await this.database(this.tableName).where("id", id).update(item)) > 0
		);
	}

	async selectByEmail(email: string): Promise<User> {
		return await this.database(this.tableName)
			.select()
			.where("email", email)
			.first();
	}
}
