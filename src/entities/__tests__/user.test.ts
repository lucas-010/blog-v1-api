import { User } from "../User";
import { validate } from "uuid";

describe("User - Entity", () => {
	let user: User;
	const userValidData = {
		name: "User Test",
		email: "user@test.com",
		password: "12345678",
	};

	beforeEach(() => {
		user = new User(userValidData);
	});

	it("should be an instance of User", () => {
		expect(user).toBeInstanceOf(User);
	});

	it("should have a valid UUID after creation", () => {
		expect(validate(user.id)).toEqual(true);
	});

	it("should have a name equal to User Test", () => {
		expect(user.name).toEqual(userValidData.name);
	});

	it("should have a email equal to user@test.com", () => {
		expect(user.email).toEqual(userValidData.email);
	});

	it("should have a password equal to 12345678", () => {
		expect(user.password).toEqual(userValidData.password);
	});

	it("should return an error when passing an empty name", () => {
		try {
			new User({ ...userValidData, name: "" });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("name");
		}
	});

	it("should return an error when passing an empty email", () => {
		try {
			new User({ ...userValidData, email: "" });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("email");
		}
	});

	it("should return an error when passing an empty password", () => {
		try {
			new User({ ...userValidData, password: "" });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("password");
		}
	});

	it("should return an error when passing an invalid email", () => {
		try {
			new User({ ...userValidData, email: "test.com" });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("email");
		}
	});

	it("should return an error when passing an name with 1 character", () => {
		try {
			new User({ ...userValidData, name: "T" });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("name");
		}
	});

	it("should return an error when passing an id as UUID invalid", () => {
		try {
			new User({ ...userValidData, id: "invalid id" });
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("id");
		}
	});
});
