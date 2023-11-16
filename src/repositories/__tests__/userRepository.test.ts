import { validate } from "uuid";
import { User } from "../../entities/User";
import { UserRepository } from "../UserRepository";

describe("User - Repository", () => {
	const userRepository = new UserRepository();

	it("should return an id according to the class when inserting user", async () => {
		const user = new User({
			name: "Test user",
			email: "test@gmail.com",
			password: "12345678",
		});
		const result = await userRepository.insert({
			name: user.name,
			email: user.email,
			password: user.password,
			id: user.id,
		});
		expect(result).toEqual(user.id);
		await userRepository.delete(user.id);
	});

	it("should inserting an user and returning a id as UUID valid", async () => {
		const user = new User({
			name: "Test user",
			email: "test@gmail.com",
			password: "12345678",
		});
		const result = await userRepository.insert({
			name: user.name,
			email: user.email,
			password: user.password,
			id: user.id,
		});
		expect(validate(result)).toEqual(true);
		await userRepository.delete(user.id);
	});

	it("should return a user according to the id passed", async () => {
		const user = new User({
			name: "Test user",
			email: "test@gmail.com",
			password: "12345678",
		});
		await userRepository.insert({
			name: user.name,
			id: user.id,
			email: user.email,
			password: user.password,
		});
		const result = await userRepository.selectById(user.id);
		expect(result.id).toEqual(user.id);
		await userRepository.delete(user.id);
	});

	it("should return 3 users", async () => {
		const user = new User({
			name: "Test user",
			email: "test@gmail.com",
			password: "12345678",
		});
		await userRepository.insert({
			name: user.name,
			email: user.email,
			password: user.password,
		});
		const result = await userRepository.selectAll(1, 1);
		expect(result.length).toEqual(1);
		await userRepository.delete(user.id);
	});

	it("should update successfully", async () => {
		const user = new User({
			name: "Test user",
			email: "test@hotmail.com",
			password: "12345678",
		});
		await userRepository.insert({
			name: user.name,
			id: user.id,
			email: user.email,
			password: user.password,
		});
		const result = await userRepository.update(
			{ name: "Test user updated" },
			user.id,
		);
		expect(result).toBe(true);
		await userRepository.delete(user.id);
	});

	it("must create a new user instance with valid values ​​from the repository", async () => {
		const user = new User({
			name: "Test user",
			email: "test@hotmail.com",
			password: "12345678",
		});
		await userRepository.insert({
			name: user.name,
			id: user.id,
			email: user.email,
			password: user.password,
		});
		const result = await userRepository.selectById(user.id);
		const userSearched = new User({
			name: result.name,
			id: result.id,
			password: result.password,
			email: result.email,
		});
		expect(userSearched.id).toEqual(user.id);
		expect(userSearched.name).toEqual(user.name);
	});
});
