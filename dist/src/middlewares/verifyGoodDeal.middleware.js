"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyGoodDealMiddleware = void 0;
const verifyGoodDealMiddleware = (req, _res, next) => {
    const car = req.body;
    if (car.price) {
        car.price = parseFloat(car.price.replaceAll(".", "")).toString();
    }
    const diference = car.fipe - Number(car.price);
    if (diference >= (car.fipe / 100) * 5) {
        req.isGoodDeal = true;
    }
    else {
        req.isGoodDeal = false;
    }
    return next();
};
exports.verifyGoodDealMiddleware = verifyGoodDealMiddleware;
//# sourceMappingURL=verifyGoodDeal.middleware.js.map