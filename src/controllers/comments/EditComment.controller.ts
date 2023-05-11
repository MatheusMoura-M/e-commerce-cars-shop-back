import { Request, Response } from "express";
import { editCommentService } from "../../services/comments";

export const editCommentController = async (req: Request, res: Response) => {
  const updatedComment = await editCommentService(
    req.id,
    req.params.id,
    req.body
  );

  return res.status(201).json(updatedComment);
};
