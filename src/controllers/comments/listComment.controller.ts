import { Request, Response } from "express";

export const listCommentController = async (req: Request, res: Response) => {
  const comments = await listCommentService(req.id, req.params.id);

  return res.status(201).json(comments);
};
