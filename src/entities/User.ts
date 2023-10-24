import { v4 as uuid } from "uuid";

export class User {
	private readonly id: string;
	private name: string;
	private email: string;
	private password: string;

	constructor(name: string, email: string, password: string) {
		this.id = uuid();
		this.name = name;
		this.email = email;
		this.password = password;
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getEmail() {
		return this.email;
	}

	getPassword() {
		return this.password;
	}
}
