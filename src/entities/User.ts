import { EntityBase } from "./EntityBase";
import { userSchema } from "../schemas/userSchema";

export interface UserProps {
	id?: string;
	name: string;
	email: string;
	password: string;
}

export class User extends EntityBase<UserProps> {
	private props: UserProps;

	constructor(props: UserProps) {
		super();
		this.props = { ...props, id: super.id };
		super.validate(userSchema, this.props);
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
