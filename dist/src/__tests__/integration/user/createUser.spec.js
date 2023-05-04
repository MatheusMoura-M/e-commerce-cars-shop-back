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
const user_entity_1 = require("../../../entities/user.entity");
//mocks
const mocks_1 = require("../../mocks");
describe("Create User Tests", () => {
    let baseUrl = "/user";
    let conn;
    let userRepo;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default
            .initialize()
            .then((dataSource) => {
            conn = dataSource;
            userRepo = conn.getRepository(user_entity_1.User);
        })
            .catch((err) => console.error(err));
        const users = yield userRepo.find();
        yield userRepo.remove(users);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield conn.destroy();
    }));
    it("POST: /user -> Should be able to create an User", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post(baseUrl).send(mocks_1.mockedUserRequest);
        const expectResults = {
            status: 201,
            bodyStrictEqual: expect.objectContaining({
                id: expect.any(String),
                name: expect.any(String),
                email: expect.any(String),
                cpf: expect.any(String),
                telephone: expect.any(String),
                description: expect.any(String),
                birthdate: expect.any(String),
                isSeller: expect.any(Boolean),
                image_url: expect.any(String),
            }),
            bodyNotHaveProperty: "password",
        };
        expect(response.status).toBe(expectResults.status);
        expect(response.body).not.toHaveProperty(expectResults.bodyNotHaveProperty);
        expect(response.body).toStrictEqual(expectResults.bodyStrictEqual);
    }));
    it("POST: /user -> Should be not allowed create a existing User", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post(baseUrl).send(mocks_1.mockedUserRequest);
        const expectResults = {
            status: 409,
            bodyHaveProperty: "error",
        };
        expect(response.status).toBe(expectResults.status);
        expect(response.body).toHaveProperty(expectResults.bodyHaveProperty);
    }));
    it("POST: /user -> Should not be able to create an User with invalid body", () => __awaiter(void 0, void 0, void 0, function* () {
        const invalidBody = mocks_1.mockedUserInvalidBodyRequest;
        const response = yield (0, supertest_1.default)(app_1.default).post(baseUrl).send(invalidBody);
        const expectResults = {
            status: 400,
            bodyToHaveProperty: "error",
        };
        expect(response.status).toBe(expectResults.status);
        expect(response.body).toHaveProperty(expectResults.bodyToHaveProperty);
        expect(response.body.isActive).not.toBe(false);
    }));
});
//# sourceMappingURL=createUser.spec.js.map