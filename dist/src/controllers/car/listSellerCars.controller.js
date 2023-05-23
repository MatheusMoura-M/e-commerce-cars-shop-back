"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSellerCarsController = void 0;
const class_transformer_1 = require("class-transformer");
const listSellerCars_service_1 = require("../../services/car/listSellerCars.service");
const listSellerCarsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const returned = yield (0, listSellerCars_service_1.listSellerCarsService)(req.params.id);
    return res.status(200).json((0, class_transformer_1.instanceToPlain)(returned));
});
exports.listSellerCarsController = listSellerCarsController;
//# sourceMappingURL=listSellerCars.controller.js.map