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
exports.createCommentService = void 0;
const comments_1 = require("../../schemas/comments");
const repositories_1 = require("../../utils/repositories");
const createCommentService = (idTo, idFrom, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield repositories_1.userRepo.findOneBy({
        id: idTo,
    });
    const carFound = yield repositories_1.carRepo.findOneBy({
        id: idFrom,
    });
    const newComment = repositories_1.commentsRepo.create({
        users: userFound,
        cars: carFound,
        comment: payload.comment,
    });
    yield repositories_1.commentsRepo.save(newComment);
    const returnComment = yield comments_1.commentResponseSchema.validate(newComment, {
        stripUnknown: true,
    });
    return returnComment;
});
exports.createCommentService = createCommentService;
//# sourceMappingURL=createComment.service.js.map