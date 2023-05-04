// import request from "supertest";
// import { DataSource, Repository } from "typeorm";
// import app from "../../../app";
// import appDataSource from "../../../data-source";
// import { User } from "../../../entities/user.entity";
// import {
//   mockedUserSession,
//   mockedInvalidBodySession,
//   mockedInvalidEmailSession,
//   mockedInvalidPasswordSession,
// } from "../../mocks";
// describe("Create session route", () => {
//   let baseUrl: string = "/login";
//   let conn: DataSource;
//   let userRepo: Repository<User>;
//   beforeAll(async () => {
//     await appDataSource
//       .initialize()
//       .then((dataSource) => {
//         conn = dataSource;
//         userRepo = conn.getRepository(User);
//       })
//       .catch((err) => console.log(err));
//   });
//   beforeEach(async () => {
//     const users = await userRepo.find();
//     await userRepo.remove(users);
//   });
//   afterAll(async () => {
//     await conn.destroy();
//   });
//   it("POST: /login -> Should be able to login as admin author", async () => {
//     const { authorPayload, sessionPayload } = mockedAdminAuthorSession;
//     const author = userRepo.create({ ...authorPayload });
//     await userRepo.save(author);
//     const response = await request(app).post(baseUrl).send(sessionPayload);
//     const adminResponse = {
//       status: 200,
//       bodyHaveProperty: "token",
//       bodyStrictEqual: expect.objectContaining({ token: expect.any(String) }),
//     };
//     expect(response.status).toBe(adminResponse.status);
//     expect(response.body).toHaveProperty(adminResponse.bodyHaveProperty);
//     expect(response.body).toStrictEqual(adminResponse.bodyStrictEqual);
//   });
//   it("POST: /login -> Should be able to login as common author", async () => {
//     const { authorPayload, sessionPayload } = mockedUserSession;
//     const author = userRepo.create({ ...authorPayload });
//     await userRepo.save(author);
//     const response = await request(app).post(baseUrl).send(sessionPayload);
//     const adminResponse = {
//       status: 200,
//       bodyHaveProperty: "token",
//       bodyStrictEqual: expect.objectContaining({ token: expect.any(String) }),
//     };
//     expect(response.status).toBe(adminResponse.status);
//     expect(response.body).toHaveProperty(adminResponse.bodyHaveProperty);
//     expect(response.body).toStrictEqual(adminResponse.bodyStrictEqual);
//   });
//   it("POST: /login -> Should not be able to login | Invalid body", async () => {
//     const response = await request(app)
//       .post(baseUrl)
//       .send(mockedInvalidBodySession);
//     const commonAuthorResponse = {
//       status: 400,
//       bodyHaveProperty: "message",
//       bodyStrictEqual: expect.objectContaining({
//         message: expect.arrayContaining([
//           "email is a required field",
//           "password is a required field",
//         ]),
//       }),
//     };
//     expect(response.status).toBe(commonAuthorResponse.status);
//     expect(response.body).toHaveProperty(commonAuthorResponse.bodyHaveProperty);
//     expect(response.body).toStrictEqual(commonAuthorResponse.bodyStrictEqual);
//   });
//   it("POST: /login -> Should not be able to login | Invalid email", async () => {
//     const { authorPayload, sessionPayload } = mockedInvalidEmailSession;
//     const author = userRepo.create({ ...authorPayload });
//     await userRepo.save(author);
//     const response = await request(app).post(baseUrl).send(sessionPayload);
//     const commonAuthorResponse = {
//       status: 401,
//       bodyHaveProperty: "message",
//       bodyStrictEqual: expect.objectContaining({
//         message: "Email or password invalid",
//       }),
//     };
//     expect(response.status).toBe(commonAuthorResponse.status);
//     expect(response.body).toHaveProperty(commonAuthorResponse.bodyHaveProperty);
//     expect(response.body).toStrictEqual(commonAuthorResponse.bodyStrictEqual);
//   });
//   it("POST: /login -> Should not be able to login | Invalid password", async () => {
//     const { authorPayload, sessionPayload } = mockedInvalidPasswordSession;
//     const author = userRepo.create({ ...authorPayload });
//     await userRepo.save(author);
//     const response = await request(app).post(baseUrl).send(sessionPayload);
//     const commonAuthorResponse = {
//       status: 401,
//       bodyHaveProperty: "message",
//       bodyStrictEqual: expect.objectContaining({
//         message: "Email or password invalid",
//       }),
//     };
//     expect(response.status).toBe(commonAuthorResponse.status);
//     expect(response.body).toHaveProperty(commonAuthorResponse.bodyHaveProperty);
//     expect(response.body).toStrictEqual(commonAuthorResponse.bodyStrictEqual);
//   });
// });
//# sourceMappingURL=session.spec.js.map