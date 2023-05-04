"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRepo = exports.addressRepo = exports.brandRepo = exports.imageRepo = exports.carRepo = exports.userRepo = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = require("../../entities");
const userRepo = data_source_1.default.getRepository(entities_1.User);
exports.userRepo = userRepo;
const carRepo = data_source_1.default.getRepository(entities_1.Car);
exports.carRepo = carRepo;
const imageRepo = data_source_1.default.getRepository(entities_1.ImageCar);
exports.imageRepo = imageRepo;
const brandRepo = data_source_1.default.getRepository(entities_1.Brand);
exports.brandRepo = brandRepo;
const addressRepo = data_source_1.default.getRepository(entities_1.Address);
exports.addressRepo = addressRepo;
const commentsRepo = data_source_1.default.getRepository(entities_1.Comments);
exports.commentsRepo = commentsRepo;
//# sourceMappingURL=index.js.map