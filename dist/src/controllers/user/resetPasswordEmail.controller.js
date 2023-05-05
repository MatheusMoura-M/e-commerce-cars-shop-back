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
exports.resetPasswordEmailController = void 0;
const user_1 = require("../../services/user");
const resetPasswordEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const { protocol } = req;
    const host = req.get("host");
    console.log(host);
    yield (0, user_1.sendResetEmailPasswordService)(email, protocol, host);
    return res.json({
        message: "Confira o seu email, foi enviado um link para mudança de senha!",
    });
});
exports.resetPasswordEmailController = resetPasswordEmailController;
//# sourceMappingURL=resetPasswordEmail.controller.js.map