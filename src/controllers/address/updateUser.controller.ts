import { Request, Response } from "express";
import { updateAddressService } from "../../services/address";

export const updateAddressController = async (req: Request, res: Response) => {

  const data = await updateAddressService(req.id, req.body);

  return res.json(data);

};
