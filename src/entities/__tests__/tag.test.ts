import { Tag } from "../Tag";
import { validate } from "uuid";

describe("Tag - Entity", () => {
	let tag: Tag;

	beforeEach(() => {
		tag = new Tag("Tag test");
	});

	it("should be an instance of Tag", () => {
		expect(tag).toBeInstanceOf(Tag);
	});

	it("should have a valid UUID after creation", () => {
		expect(validate(tag.id)).toEqual(true);
	});

	it("should have a name equal to Tag test", () => {
		expect(tag.name).toEqual("Tag test");
	});

	it("should return an error when passing an empty name", () => {
		try {
			new Tag("");
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("name");
		}
	});

	it("should return an error when passing an name with 1 character", () => {
		try {
			new Tag("T");
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("name");
		}
	});

	it("should return an error when passing an id as UUID invalid", () => {
		try {
			new Tag("Tag", "invalid id");
		} catch (error) {
			const formatError = JSON.parse((error as Error).message);
			expect(error).toBeInstanceOf(Error);
			expect(formatError[0].path[0]).toEqual("id");
		}
	});
});
