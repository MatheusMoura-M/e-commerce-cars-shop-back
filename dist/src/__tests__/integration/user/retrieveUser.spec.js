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
const mocks_1 = require("../../mocks");
describe("Retrieve User Tests", () => {
    let baseUrl = "/user/profile";
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
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield conn.destroy();
    }));
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield userRepo.find();
        yield userRepo.remove(users);
    }));
    // it("GET: /user -> Should be able to retrieve all Users", async () => {
    //   const firstUserPayload = mockedUserRequest;
    //   const secondUserPayload = mockedUser2Request;
    //   const firstUser = await request(app).post(baseUrl).send(firstUserPayload);
    //   const secondUser = await request(app).post(baseUrl).send(secondUserPayload);
    //   expect(firstUser.status).toBe(201);
    //   expect(secondUser.status).toBe(201);
    //   const firstUserLogged = await request(app).post("/login").send({
    //     email: firstUserPayload.email,
    //     password: firstUserPayload.password,
    //   });
    //   const token = firstUserLogged.body.token;
    //   const response = await request(app)
    //     .get(baseUrl)
    //     .set("Authorization", `Bearer ${token}`);
    //   const expectResults = {
    //     status: 200,
    //     bodyToEqual: expect.arrayContaining([
    //       expect.objectContaining({
    //         id: expect.any(String),
    //         email: expect.any(String),
    //         name: expect.any(String),
    //         cpf: expect.any(String),
    //         telephone: expect.any(String),
    //         description: expect.any(String),
    //         image_url: expect.any(String),
    //         isSeller: expect.any(Boolean),
    //         birthdate: expect.any(string),
    //       }),
    //     ]),
    //     bodyNotToEqual: expect.arrayContaining([
    //       expect.objectContaining({ password: expect.any(String) }),
    //     ]),
    //     bodyToHaveLength: 2,
    //   };
    //   expect(response.status).toBe(expectResults.status);
    //   expect(response.body).not.toEqual(expectResults.bodyNotToEqual);
    //   expect(response.body).toEqual(expectResults.bodyToEqual);
    //   expect(response.body).toHaveLength(expectResults.bodyToHaveLength);
    // });
    it("GET: /user/profile -> Should be able to retrieve an specific User by token", () => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield (0, supertest_1.default)(app_1.default).post("/user").send(mocks_1.mockedUserRequest);
        expect(newUser.status).toBe(201);
        const userLogged = yield (0, supertest_1.default)(app_1.default).post("/login").send({
            email: mocks_1.mockedUserRequest.email,
            password: mocks_1.mockedUserRequest.password,
        });
        const token = userLogged.body.token;
        const response = yield (0, supertest_1.default)(app_1.default)
            .get(baseUrl)
            .set("Authorization", `Bearer ${token}`);
        const expectResults = {
            status: 200,
            bodyToEqual: expect.objectContaining({
                id: expect.any(String),
                email: expect.any(String),
                name: expect.any(String),
                cpf: expect.any(String),
                telephone: expect.any(String),
                description: expect.any(String),
                image_url: expect.any(String),
                isSeller: expect.any(Boolean),
                birthdate: expect.any(String),
            }),
            bodyNotHaveProperty: "password",
        };
        expect(response.status).toBe(expectResults.status);
        expect(response.body).not.toHaveProperty(expectResults.bodyNotHaveProperty);
        expect(response.body).toStrictEqual(expectResults.bodyToEqual);
    }));
});
//# sourceMappingURL=retrieveUser.spec.js.map