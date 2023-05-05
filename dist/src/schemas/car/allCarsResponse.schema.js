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
exports.allCarsResponseSchema = void 0;
const yup = __importStar(require("yup"));
exports.allCarsResponseSchema = yup.array(yup.object().shape({
    images: yup.array(yup.object().shape({
        id: yup.string().notRequired(),
        image_url: yup.string().notRequired(),
    })),
    user: yup.object().shape({
        id: yup.string().required(),
    }),
    cover_image: yup.string().required(),
    published: yup.boolean().required(),
    is_good_price: yup.boolean().required(),
    description: yup.string().required(),
    fipe: yup.number().required(),
    price: yup.number().required(),
    color: yup.string().required(),
    km: yup.number().required(),
    fuel: yup.string().required(),
    year: yup.string().required(),
    model: yup.string().required(),
    brand: yup.string().required(),
    id: yup.string().required(),
}));
//# sourceMappingURL=allCarsResponse.schema.js.map