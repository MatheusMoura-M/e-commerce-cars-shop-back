"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carCreateSchema = void 0;
const yup = __importStar(require("yup"));
exports.carCreateSchema = yup.object().shape({
    images_6: yup.string().notRequired(),
    images_5: yup.string().notRequired(),
    images_4: yup.string().notRequired(),
    images_3: yup.string().notRequired(),
    images_2: yup.string().notRequired(),
    images_1: yup.string().notRequired(),
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuel: yup.string().required(),
    km: yup.number().required(),
    color: yup.string().required(),
    price: yup.string().required(),
    fipe: yup.number().required(),
    description: yup.string().required(),
    published: yup.boolean().required(),
    cover_image: yup.string(),
});
//# sourceMappingURL=carCreate.schema.js.map