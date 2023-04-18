import request from "supertest";
import { DataSource, Repository } from "typeorm";
import app from "../../../app";
import appDataSource from "../../../data-source";
import { User } from "../../../entities/user.entity";
import { mockedUser2Request, mockedUserRequest } from "../../mocks";

describe("Retrieve User Tests", () => {
  let baseUrl: string = "/user/profile";
  let conn: DataSource;
  let userRepo: Repository<User>;

  beforeAll(async () => {
    await appDataSource
      .initialize()
      .then((dataSource) => {
        conn = dataSource;
        userRepo = conn.getRepository(User);
      })
      .catch((err) => console.error(err));
  });

  afterAll(async () => {
    await conn.destroy();
  });

  beforeEach(async () => {
    const users = await userRepo.find();
    await userRepo.remove(users);
  });

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
  //         birthdate: expect.any(Date),
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

  it("GET: /user/profile -> Should be able to retrieve an specific User by token", async () => {
    const newUser = await request(app).post("/user").send(mockedUserRequest);

    expect(newUser.status).toBe(201);

    const userLogged = await request(app).post("/login").send({
      email: mockedUserRequest.email,
      password: mockedUserRequest.password,
    });

    const token = userLogged.body.token;

    const response = await request(app)
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
  });
});
