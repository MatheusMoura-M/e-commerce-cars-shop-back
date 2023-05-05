"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAvalidUUID = void 0;
const uuid_validate_1 = __importDefault(require("uuid-validate"));
const isAvalidUUID = (req, res, next) => {
    const is_ValidUUID = (0, uuid_validate_1.default)(req.params.id);
    if (!is_ValidUUID) {
        return res.status(409).json({ error: "UUID is not valid" });
    }
    next();
};
exports.isAvalidUUID = isAvalidUUID;
//# sourceMappingURL=isAvalidUUID.middleware.js.map