import { Request, Response } from "express";
import { createCommentService } from "../../services/comments";

export const createCommentController = async (req: Request, res: Response) => {
  const comment = await createCommentService(req.id, req.params.id, req.body);

  return res.status(201).json(comment);
};
