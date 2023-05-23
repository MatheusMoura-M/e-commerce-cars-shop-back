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
exports.carUpdateSchema = void 0;
const yup = __importStar(require("yup"));
exports.carUpdateSchema = yup
    .object()
    .shape({
    images: yup.array(yup.object().shape({
        id: yup.string().notRequired(),
        image_url: yup.string().notRequired(),
        car: yup.object().shape({}).notRequired(),
    })),
    cover_image: yup.string().notRequired(),
    published: yup.boolean().notRequired(),
    description: yup.string().notRequired(),
    fipe: yup.number().notRequired(),
    price: yup.string().notRequired(),
    color: yup.string().notRequired(),
    km: yup.number().notRequired(),
    fuel: yup.string().notRequired(),
    year: yup.string().notRequired(),
    model: yup.string().notRequired(),
    brand: yup.string().notRequired(),
    id: yup.string().notRequired(),
});
//# sourceMappingURL=carUpdate.schema.js.map