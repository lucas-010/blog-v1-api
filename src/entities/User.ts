import { userSchema } from "../schemas/userSchema";
import { v4 as uuid } from "uuid";
import { validate } from "../utils/validateSchema";

export interface UserProps {
	id?: string;
	name: string;
	email: string;
	password: string;
}

export class User {
	private props: UserProps;

	constructor(props: UserProps) {
		this.props = { ...props, id: uuid() };
		validate(userSchema, this.props);
	}

	get id() {
		return String(this.props.id);
	}

	get name() {
		return this.props.name;
	}

	get email() {
		return this.props.email;
	}

	get password() {
		return this.props.password;
	}
}
