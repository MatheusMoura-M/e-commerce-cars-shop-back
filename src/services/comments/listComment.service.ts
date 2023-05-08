import { AppError } from "../../error/appError.error";
import { ICarResponse } from "../../interfaces/car";
import { ICommentListResponse } from "../../interfaces/comments";
import { commentListAllSchema } from "../../schemas/comments";
import { carRepo, commentsRepo, userRepo } from "../../utils/repositories";

export const listCommentService = async (
  idFrom: string
): Promise<ICommentListResponse[]> => {
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

  const returnComment = await commentListAllSchema.validate(comments, {
    stripUnknown: true,
  });

  return returnComment;
};
