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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const data_source_1 = __importDefault(require("../../../data-source"));
const car_entity_1 = require("../../../entities/car.entity");
//mocks
const mocks_1 = require("../../mocks");
describe("Create Car Tests", () => {
    let baseUrl = "/car";
    let conn;
    let carRepo;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default
            .initialize()
            .then((dataSource) => {
            conn = dataSource;
            carRepo = conn.getRepository(car_entity_1.Car);
        })
            .catch((err) => console.error(err));
        const cars = yield carRepo.find();
        yield carRepo.remove(cars);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield conn.destroy();
    }));
    it("POST: /car -> Should be able to create an Car", () => __awaiter(void 0, void 0, void 0, function* () {
        const { userPayload, sessionPayload } = mocks_1.mockedUserSession;
        yield (0, supertest_1.default)(app_1.default).post("/user").send(userPayload);
        const userLogged = yield (0, supertest_1.default)(app_1.default).post("/login").send(sessionPayload);
        const token = userLogged.body.token;
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set("Authorization", `Bearer ${token}`)
            .send(mocks_1.mockedCarRequest);
        const expectResults = {
            status: 201,
            bodyStrictEqual: expect.objectContaining({
                id: expect.any(String),
                brand: expect.any(String),
                model: expect.any(String),
                price: expect.any(Number),
                fipe: expect.any(Number),
                year: expect.any(String),
                km: expect.any(Number),
                color: expect.any(String),
                fuel: expect.any(String),
                description: expect.any(String),
                published: expect.any(Boolean),
                is_good_price: expect.any(Boolean),
                cover_image: expect.any(String),
                user: expect.objectContaining({
                    id: expect.any(String),
                }),
            }),
            bodyNotHaveProperty: "password",
        };
        expect(response.status).toBe(expectResults.status);
        expect(response.body).not.toHaveProperty(expectResults.bodyNotHaveProperty);
        expect(response.body).toStrictEqual(expectResults.bodyStrictEqual);
        expect(response.body.is_good_price).toBe(false);
    }));
    // it("POST: /car -> Should be not allowed create a existing Car", async () => {
    //   const { sessionPayload } = mockedUserSession;
    //   const userLogged = await request(app).post("/login").send(sessionPayload);
    //   const token = userLogged.body.token;
    //   const response = await request(app)
    //     .post(baseUrl)
    //     .set("Authorization", `Bearer ${token}`)
    //     .send(mockedCarRequest);
    //   const expectResults = {
    //     status: 409,
    //     bodyHaveProperty: "error",
    //   };
    //   expect(response.status).toBe(expectResults.status);
    //   expect(response.body).toHaveProperty(expectResults.bodyHaveProperty);
    // });
    it("POST: /car -> Should not be able to create an Car with invalid body", () => __awaiter(void 0, void 0, void 0, function* () {
        const { sessionPayload } = mocks_1.mockedUserSession;
        const userLogged = yield (0, supertest_1.default)(app_1.default).post("/login").send(sessionPayload);
        const token = userLogged.body.token;
        const invalidBody = mocks_1.mockedCarInvalidBodyRequest;
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set("Authorization", `Bearer ${token}`)
            .send(invalidBody);
        const expectResults = {
            status: 400,
            bodyToHaveProperty: "error",
        };
        expect(response.status).toBe(expectResults.status);
        expect(response.body).toHaveProperty(expectResults.bodyToHaveProperty);
    }));
});
//# sourceMappingURL=createCar.spec.js.map