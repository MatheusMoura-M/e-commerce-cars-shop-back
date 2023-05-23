import { AppError } from "../../error/appError.error";
import { ICommentRequest } from "../../interfaces/comments";
import { commentResponseSchema } from "../../schemas/comments";
import { commentsRepo } from "../../utils/repositories";

export const editCommentService = async (
  idUser: string,
  idComment: string,
  data: ICommentRequest
) => {
  const commentFound = await commentsRepo.findOne({
    where: { id: idComment },
    relations: { cars: true, users: true },
  });
  if (commentFound.users.id !== idUser) {
    throw new AppError("User is not authorized", 403);
  }

  const newComment = commentsRepo.create({
    ...commentFound,
    ...data,
  });

  await commentsRepo.save(newComment);

  const returnComment = await commentResponseSchema.validate(newComment, {
    stripUnknown: true,
  });

  return returnComment;
};
