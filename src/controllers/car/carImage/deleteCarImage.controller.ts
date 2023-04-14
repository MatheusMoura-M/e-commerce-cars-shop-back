import { Request, Response } from "express";
import { deleteCarImageService } from "../../../services/car/carImage/deleteCarImage.service";

export const deleteCarImageController = async (req: Request, res: Response) => {

    await deleteCarImageService(req.params.id, req.id)

    return res.status(204).json()

}