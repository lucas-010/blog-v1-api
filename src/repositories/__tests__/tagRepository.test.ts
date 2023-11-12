import { validate } from "uuid";
import { Tag } from "../../entities/Tag";
import { TagRepository } from "../TagRepository";

describe("Tag - Repository", () => {
	const tagRepository = new TagRepository();

	it("should return an id according to the class when inserting tag", async () => {
		const tag = new Tag("Test Tag");
		const result = await tagRepository.insert({ name: tag.name, id: tag.id });
		expect(result).toEqual(tag.id);
		await tagRepository.delete(tag.id);
	});

	it("should inserting an tag and returning a id as UUID valid", async () => {
		const tag = new Tag("Test Tag");
		const result = await tagRepository.insert({ name: tag.name, id: tag.id });
		expect(validate(result)).toEqual(true);
		await tagRepository.delete(tag.id);
	});

	it("should return a tag according to the id passed", async () => {
		const tag = new Tag("Test Tag");
		await tagRepository.insert({ name: tag.name, id: tag.id });
		const result = await tagRepository.selectById(tag.id);
		expect(result.id).toEqual(tag.id);
		await tagRepository.delete(tag.id);
	});

	it("should return 13 tags", async () => {
		const result = await tagRepository.selectAll();
		expect(result.length).toEqual(13);
	});

	it("should update successfully", async () => {
		const tag = new Tag("Test Tag");
		await tagRepository.insert({ name: tag.name, id: tag.id });
		const result = await tagRepository.update(
			{ name: "Test Tag updated" },
			tag.id,
		);
		expect(result).toBe(true);
	});

	it("must create a new tag instance with valid values ​​from the repository", async () => {
		const tag = new Tag("Test Tag");
		await tagRepository.insert({ name: tag.name, id: tag.id });
		const result = await tagRepository.selectById(tag.id);
		const tagSearched = new Tag(result.name, result.id);
		expect(tagSearched.id).toEqual(tag.id);
		expect(tagSearched.name).toEqual(tag.name);
	});
});
