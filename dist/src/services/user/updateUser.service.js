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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const appError_error_1 = require("../../error/appError.error");
const user_1 = require("../../schemas/user");
const repositories_1 = require("../../utils/repositories");
const updateUserService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    for (let elem in payload) {
        if (payload[elem] === "") {
            delete payload[elem];
        }
    }
    const userFound = yield repositories_1.userRepo.findOneBy({
        id: id,
    });
    if (!userFound) {
        throw new appError_error_1.AppError("User not found!", 404);
    }
    const userUpdated = Object.assign(Object.assign({}, userFound), payload);
    const userCars = yield repositories_1.carRepo.find({
        where: {
            user: {
                id: userFound.id,
            },
        },
    });
    if (!userUpdated.isSeller) {
        try {
            for (var _d = true, userCars_1 = __asyncValues(userCars), userCars_1_1; userCars_1_1 = yield userCars_1.next(), _a = userCars_1_1.done, !_a;) {
                _c = userCars_1_1.value;
                _d = false;
                try {
                    let car = _c;
                    yield repositories_1.carRepo.delete(car.id);
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = userCars_1.return)) yield _b.call(userCars_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    yield repositories_1.userRepo.save(userUpdated);
    // if (!userUpdated.isSeller) {
    //   userCars.forEach(async (car) => {
    //     const updatedCar = {
    //       ...car,
    //       published: false,
    //     };
    //     await carRepo.save(updatedCar);
    //   });
    // } else {
    //   userCars.forEach(async (car) => {
    //     const updatedCar = {
    //       ...car,
    //       published: true,
    //     };
    //     await carRepo.save(updatedCar);
    //   });
    // }
    const userWithout = yield user_1.userUpdateResponseSchema.validate(userUpdated, {
        stripUnknown: true,
    });
    return userWithout;
});
exports.updateUserService = updateUserService;
//# sourceMappingURL=updateUser.service.js.map