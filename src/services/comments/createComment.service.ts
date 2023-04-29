import { User } from "../../entities";
import { ICommentRequest } from "../../interfaces/comments";
import { carResponseSchema } from "../../schemas/car";
import { commentResponseSchema } from "../../schemas/comments";
import { carRepo, commentsRepo, userRepo } from "../../utils/repositories";

export const createCommentService = async (
  idTo: string,
  idFrom: string,
  payload: ICommentRequest
) => {
  const userFound = await userRepo.findOneBy({
    id: idTo,
  });

  const carFound = await carRepo.findOneBy({
    id: idFrom,
  });

  const newComment = commentsRepo.create({
    users: userFound,
    cars: carFound,
    comment: payload.comment,
  });

  await commentsRepo.save(newComment);

  const returnComment = await commentResponseSchema.validate(newComment, {
    stripUnknown: true,
  });

  return returnComment;
};
