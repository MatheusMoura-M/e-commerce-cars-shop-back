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
exports.listBrandsController = void 0;
const brand_1 = require("../../services/brand");
const listBrandsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const returned = yield (0, brand_1.listBrandsService)();
    return res.status(200).json(returned);
});
exports.listBrandsController = listBrandsController;
//# sourceMappingURL=listBrand.controller.js.map