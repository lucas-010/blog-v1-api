import { Article } from "../../../entities/Article";
import { ArticleTag } from "../../../entities/ArticleTag";
import { Comment } from "../../../entities/Comment";
import { Tag } from "../../../entities/Tag";
import { User } from "../../../entities/User";

declare module "knex/types/tables" {
	interface Tables {
		user: User;
		article: Article;
		tag: Tag;
		articleTag: ArticleTag;
		comment: Comment;
	}
}
