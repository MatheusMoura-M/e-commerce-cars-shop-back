import { Request, Response } from "express";
import { listCommentService } from "../../services/comments";

export const listCommentController = async (req: Request, res: Response) => {
  const comments = await listCommentService(req.params.id);

  return res.status(201).json(comments);
};
