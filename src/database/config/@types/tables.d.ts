import { ArticleProps } from "../../../entities/Article";
import { ArticleTagProps } from "../../../entities/ArticleTag";
import { CommentProps } from "../../../entities/Comment";
import { TagProps } from "../../../entities/Tag";
import { UserProps } from "../../../entities/User";

declare module "knex/types/tables" {
	interface Tables {
		user: UserProps;
		article: ArticleProps;
		tag: TagProps;
		articleTag: ArticleTagProps;
		comment: CommentProps;
	}
}
