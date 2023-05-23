"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentController = exports.editCommentController = exports.listCommentController = exports.createCommentController = void 0;
const EditComment_controller_1 = require("./EditComment.controller");
Object.defineProperty(exports, "editCommentController", { enumerable: true, get: function () { return EditComment_controller_1.editCommentController; } });
const createComment_controller_1 = require("./createComment.controller");
Object.defineProperty(exports, "createCommentController", { enumerable: true, get: function () { return createComment_controller_1.createCommentController; } });
const deleteComment_controller_1 = __importDefault(require("./deleteComment.controller"));
exports.deleteCommentController = deleteComment_controller_1.default;
const listComment_controller_1 = require("./listComment.controller");
Object.defineProperty(exports, "listCommentController", { enumerable: true, get: function () { return listComment_controller_1.listCommentController; } });
//# sourceMappingURL=index.js.map