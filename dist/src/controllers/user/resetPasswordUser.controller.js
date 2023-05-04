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
exports.resetPasswordUserController = void 0;
const user_1 = require("../../services/user");
const resetPasswordUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    const { token } = req.params;
    yield (0, user_1.resetUserPasswordService)(password, token);
    return res.json({ message: "Password has change with sucess." });
});
exports.resetPasswordUserController = resetPasswordUserController;
//# sourceMappingURL=resetPasswordUser.controller.js.map