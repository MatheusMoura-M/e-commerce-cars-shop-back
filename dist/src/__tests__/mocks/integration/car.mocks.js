"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedCar2Response = exports.mockedCar2Request = exports.mockedCarInvalidBodyRequest = exports.mockedCarResponse = exports.mockedCarRequest = void 0;
const mockedCarRequest = {
    brand: "bmw",
    model: "bmw x6",
    year: "2018",
    fuel: "Gasolina",
    km: 300,
    color: "preta",
    price: 689.0,
    fipe: 0.5,
    description: "carro mto bom",
    published: true,
    cover_image: "https://media.ed.edmunds-media.com/bmw/x5/2013/oem/2013_bmw_x5_4dr-suv_xdrive35d_fq_oem_1_1600.jpg",
};
exports.mockedCarRequest = mockedCarRequest;
const mockedCarResponse = {
    cover_image: "https://media.ed.edmunds-media.com/bmw/x5/2013/oem/2013_bmw_x5_4dr-suv_xdrive35d_fq_oem_1_1600.jpg",
    published: true,
    is_good_price: false,
    description: "carro mto bom",
    fipe: 0.5,
    price: 689,
    color: "preta",
    km: 300,
    fuel: "Gasolina",
    year: "2018",
    model: "bmw x6",
    brand: "bmw",
};
exports.mockedCarResponse = mockedCarResponse;
const mockedCar2Request = {
    brand: "Fiat",
    model: "Palio",
    year: "2008",
    fuel: "Gasolina",
    km: 300,
    color: "preta",
    price: 689.0,
    fipe: 0.5,
    description: "carro mto bom",
    published: true,
    cover_image: "https://media.ed.edmunds-media.com/bmw/x5/2013/oem/2013_bmw_x5_4dr-suv_xdrive35d_fq_oem_1_1600.jpg",
};
exports.mockedCar2Request = mockedCar2Request;
const mockedCar2Response = {
    cover_image: "https://media.ed.edmunds-media.com/bmw/x5/2013/oem/2013_bmw_x5_4dr-suv_xdrive35d_fq_oem_1_1600.jpg",
    published: true,
    is_good_price: false,
    description: "carro mto bom",
    fipe: 0.5,
    price: 689,
    color: "preta",
    km: 300,
    fuel: "Gasolina",
    year: "2008",
    model: "Palio",
    brand: "Fiat",
};
exports.mockedCar2Response = mockedCar2Response;
const mockedCarInvalidBodyRequest = {
    model: "Uno",
    brand: "Fiat",
};
exports.mockedCarInvalidBodyRequest = mockedCarInvalidBodyRequest;
//# sourceMappingURL=car.mocks.js.map