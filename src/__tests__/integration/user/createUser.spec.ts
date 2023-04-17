import request from "supertest";
import { DataSource, Repository } from "typeorm";
import app from "../../../app";
import appDataSource from "../../../data-source";
import { User } from "../../../entities/user.entity";

//mocks
import {
  mockedUserRequest,
  mockedUserInvalidBodyRequest,
  mockedUserResponse,
} from "../../mocks";

describe("Create User Tests", () => {
  let baseUrl: string = "/user";
  console.log("AAAAAAAAA", baseUrl);
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

  it("POST: /user -> Should be able to create an User", async () => {
    const userPayload = mockedUserRequest;

    const response = await request(app).post(baseUrl).send(userPayload);

    const expectResults = {
      status: 201,
      bodyStrictEqual: expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        email: expect.any(String),
        cpf: expect.any(String),
        telephone: expect.any(String),
        description: expect.any(String),
        birthdate: expect.any(Date),
        isSeller: expect.any(Boolean),
        image_url: expect.any(String),
      }),
      bodyNotHaveProperty: "password",
    };
    // const expectResults = {
    //   status: 201,
    //   bodyStrictEqual: expect.objectContaining({
    //     id: expect.any(String),
    //     ...mockedUserResponse,
    //   }),
    //   bodyNotHaveProperty: "password",
    // };
    // const expectResults = {
    //   status: 201,
    //   bodyStrictEqual: expect.objectContaining({
    //     id: expect.any(String),
    //     ...mockedUserResponseTest,
    //     birthdate: expect.any(String),
    //   }),
    //   bodyNotHaveProperty: "password",
    // };

    console.log("A", response.body);
    console.log(expectResults.bodyStrictEqual);

    expect(response.status).toBe(expectResults.status);
    expect(response.body).not.toHaveProperty(expectResults.bodyNotHaveProperty);
    expect(response.body).toStrictEqual(expectResults.bodyStrictEqual);
  });

  // it("POST: /user -> Should be not allowed create a existing User", async () => {
  //   const userPayload = mockedUserRequest;

  //   const createFirstUser = await request(app).post(baseUrl).send(userPayload);

  //   expect(createFirstUser.status).toBe(201);

  //   const response = await request(app).post(baseUrl).send(userPayload);

  //   const expectResults = {
  //     status: 409,
  //     bodyHaveProperty: "message",
  //   };

  //   expect(response.status).toBe(expectResults.status);
  //   expect(response.body).toHaveProperty(expectResults.bodyHaveProperty);
  // });

  // it("POST: /user -> Should not be able to create an User with invalid body", async () => {
  //   const invalidBody = mockedUserInvalidBodyRequest;
  //   const response = await request(app).post(baseUrl).send(invalidBody);

  //   const expectResults = {
  //     status: 400,
  //     bodyToHaveProperty: "message",
  //   };

  //   expect(response.status).toBe(expectResults.status);
  //   expect(response.body).toHaveProperty(expectResults.bodyToHaveProperty);
  //   expect(response.body.isActive).not.toBe(false);
  // });
});
