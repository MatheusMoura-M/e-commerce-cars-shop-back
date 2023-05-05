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
const bodyValidator = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validator = yield schema.validate(req.body, {
            stripUnknown: true,
            abortEarly: true,
        });
        req.body = validator;
        next();
    }
    catch (error) {
        return res.status(400).json({ error: error });
    }
});
exports.default = bodyValidator;
//# sourceMappingURL=bodyValidator.middleware.js.map