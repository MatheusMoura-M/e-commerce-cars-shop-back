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
exports.listCarImageController = void 0;
const car_1 = require("../../../services/car");
const listCarImageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const returned = yield (0, car_1.listCarImageService)(req.params.id);
    return res.status(200).json(returned);
});
exports.listCarImageController = listCarImageController;
//# sourceMappingURL=listCarImage.controller.js.map