import { Request, Response } from "express";
import { getUserAddressLoggedService } from "../../services/address/getUserAddressLogged.service";

export const getUserAddressLoggedController = async (req: Request, res: Response) => {

    const data = await getUserAddressLoggedService(req.id)

    return res.status(200).json(data)
  
}