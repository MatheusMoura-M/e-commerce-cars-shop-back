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
exports.editCommentService = void 0;
const appError_error_1 = require("../../error/appError.error");
const comments_1 = require("../../schemas/comments");
const repositories_1 = require("../../utils/repositories");
const editCommentService = (idUser, idComment, data) => __awaiter(void 0, void 0, void 0, function* () {
    const commentFound = yield repositories_1.commentsRepo.findOne({
        where: { id: idComment },
        relations: { cars: true, users: true },
    });
    if (commentFound.users.id !== idUser) {
        throw new appError_error_1.AppError("User is not authorized", 403);
    }
    const newComment = repositories_1.commentsRepo.create(Object.assign(Object.assign({}, commentFound), data));
    yield repositories_1.commentsRepo.save(newComment);
    const returnComment = yield comments_1.commentResponseSchema.validate(newComment, {
        stripUnknown: true,
    });
    return returnComment;
});
exports.editCommentService = editCommentService;
//# sourceMappingURL=editComment.service.js.map