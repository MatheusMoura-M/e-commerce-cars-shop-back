import { Request, Response, NextFunction } from "express";

export const verifyGoodDealMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const car = req.body;
  if (car.price) {
    const removePoint = car.price.replaceAll(".", "");
    const formatNumber = parseFloat(removePoint);
    const formatString = formatNumber.toString();
    car.price = formatString;
  }
  const diference = car.fipe - Number(car.price);

  if (diference >= (car.fipe / 100) * 5) {
    req.isGoodDeal = true;
  } else {
    req.isGoodDeal = false;
  }
  return next();
};
