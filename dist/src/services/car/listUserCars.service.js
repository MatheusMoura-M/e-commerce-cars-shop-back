"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUserCarsService = void 0;
const repositories_1 = require("../../utils/repositories");
const listUserCarsService = (userId) => {
    const cars = repositories_1.carRepo.findBy({
        user: {
            id: userId,
        },
    });
    return cars;
};
exports.listUserCarsService = listUserCarsService;
//# sourceMappingURL=listUserCars.service.js.map