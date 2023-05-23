"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const comments_1 = require("../schemas/comments");
const comments_2 = require("../controllers/comments");
const commentsRoutes = (0, express_1.Router)();
commentsRoutes.post("/:id", middlewares_1.validateTokenMiddleware, (0, middlewares_1.bodyValidator)(comments_1.commentRequestSchema), comments_2.createCommentController);
commentsRoutes.patch("/:id", middlewares_1.validateTokenMiddleware, (0, middlewares_1.bodyValidator)(comments_1.commentRequestSchema), comments_2.editCommentController);
commentsRoutes.get("/:id", comments_2.listCommentController);
commentsRoutes.delete("/:id", middlewares_1.validateTokenMiddleware, comments_2.deleteCommentController);
exports.default = commentsRoutes;
//# sourceMappingURL=comments.routes.js.map