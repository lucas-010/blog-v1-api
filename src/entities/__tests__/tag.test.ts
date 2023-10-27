import { Tag } from "../Tag";
import { validate } from "uuid";

describe("Tag - Entity", () => {
	let tag: Tag;

	beforeEach(() => {
		tag = new Tag({ name: "Tag test" });
	});

	it("should create an instance of Tag", () => {
		expect(tag).toBeInstanceOf(Tag);
	});

	it("should have a valid UUID after creation", () => {
		expect(validate(tag.id)).toEqual(true);
	});

	it("should have a name equal to Tag test", () => {
		expect(tag.name).toEqual("Tag test");
	});

	it("should return an error when passing an empty name", () => {
		expect(() => new Tag({ name: "J" })).toThrow(
			"Erros de validação: Deve ter no mínimo 2 caracteres",
		);
	});
});
