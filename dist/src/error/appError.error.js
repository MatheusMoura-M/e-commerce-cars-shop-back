"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.AppError = void 0;
class AppError extends Error {
    constructor(message, status = 400) {
        super();
        this.message = message;
        this.status = status;
    }
}
exports.AppError = AppError;
const handleError = (error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.status).json({ error: error.message });
    }
    console.log(error);
    return res.status(500).json("internal server error");
};
exports.handleError = handleError;
//# sourceMappingURL=appError.error.js.map