import { Article } from "../../../models/Article";
import { ArticleTag } from "../../../models/ArticleTag";
import { Comment } from "../../../models/Comment";
import { Tag } from "../../../models/Tag";
import { User } from "../../../models/User";

declare module "knex/types/tables" {
	interface Tables {
		user: User;
		article: Article;
		tag: Tag;
		articleTag: ArticleTag;
		comment: Comment;
	}
}
