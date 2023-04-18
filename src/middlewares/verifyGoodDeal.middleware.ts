import { Request, Response, NextFunction } from "express";

export const verifyGoodDealMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const car = req.body;
  const diference = car.fipe - car.price;
  if (diference >= (car.fipe / 100) * 5) {
    req.isGoodDeal = true;
  } else {
    req.isGoodDeal = false;
  }
  return next();
};
