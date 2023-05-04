import { Request, Response } from "express";
import { listBrandsService } from "../../services/brand";

export const listBrandsController = async (req: Request, res: Response) => {
  const returned = await listBrandsService();

  return res.status(200).json(returned);
};
