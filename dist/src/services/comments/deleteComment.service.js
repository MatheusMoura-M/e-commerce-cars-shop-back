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
exports.deleteCommentService = void 0;
const appError_error_1 = require("../../error/appError.error");
const repositories_1 = require("../../utils/repositories");
const deleteCommentService = (idComment, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = yield repositories_1.commentsRepo
        .createQueryBuilder("comments")
        .innerJoinAndSelect("comments.users", "users")
        .where("comments.id = :idComment", { idComment: idComment })
        .andWhere("users.id = :idUser", { idUser: userId })
        .getOne();
    if (!repo) {
        throw new appError_error_1.AppError("User must be the owner to delete this comment");
    }
    yield repositories_1.commentsRepo.delete({ id: repo.id });
    return {};
});
exports.deleteCommentService = deleteCommentService;
//# sourceMappingURL=deleteComment.service.js.map