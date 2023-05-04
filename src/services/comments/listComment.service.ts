import { Comments } from "../../entities";
import { ICommentRequest } from "../../interfaces/comments";
import { commentResponseSchema } from "../../schemas/comments";
import { carRepo, commentsRepo, userRepo } from "../../utils/repositories";

export const listCommentService = async (
  idTo: string,
  idFrom: string
): Promise<Comments[]> => {
  const userFound = await userRepo.findOneBy({
    id: idTo,
  });

  const carFound = await carRepo.findOneBy({
    id: idFrom,
  });

  const comments = await commentsRepo.find({
    relations: {
      users: true,
    },
    where: {
      cars: { id: carFound.id },
    },
  });

  return comments;
};
