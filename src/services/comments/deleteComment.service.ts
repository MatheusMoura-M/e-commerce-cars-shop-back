import { AppError } from "../../error/appError.error";
import { commentsRepo } from "../../utils/repositories";

export const deleteCommentService = async (
  idComment: string,
  userId: string
) => {
  const repo = await commentsRepo
    .createQueryBuilder("comments")
    .innerJoinAndSelect("comments.users", "users")
    .where("comments.id = :idComment", { idComment: idComment })
    .andWhere("users.id = :idUser", { idUser: userId })
    .getOne();

  if (!repo) {
    throw new AppError("User must be the owner to delete this comment");
  }

  await commentsRepo.delete({ id: repo.id });

  return {};
};
