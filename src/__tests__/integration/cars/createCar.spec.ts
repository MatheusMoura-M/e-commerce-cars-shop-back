import request from "supertest";
import { DataSource, Repository } from "typeorm";
import app from "../../../app";
import appDataSource from "../../../data-source";
import { Car } from "../../../entities/car.entity";

//mocks
import {
  mockedCarRequest,
  mockedCarInvalidBodyRequest,
  mockedUserRequest,
  mockedUserSession,
} from "../../mocks";

describe("Create Car Tests", () => {
  let baseUrl: string = "/car";
  let conn: DataSource;
  let carRepo: Repository<Car>;

  beforeAll(async () => {
    await appDataSource
      .initialize()
      .then((dataSource) => {
        conn = dataSource;
        carRepo = conn.getRepository(Car);
      })
      .catch((err) => console.error(err));
    const cars = await carRepo.find();
    await carRepo.remove(cars);
  });

  afterAll(async () => {
    await conn.destroy();
  });

  it("POST: /car -> Should be able to create an Car", async () => {
    const { userPayload, sessionPayload } = mockedUserSession;
    await request(app).post("/user").send(userPayload);
    const userLogged = await request(app).post("/login").send(sessionPayload);
    const token = userLogged.body.token;

    const response = await request(app)
      .post(baseUrl)
      .set("Authorization", `Bearer ${token}`)
      .send(mockedCarRequest);

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
  });

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

  it("POST: /car -> Should not be able to create an Car with invalid body", async () => {
    const { sessionPayload } = mockedUserSession;
    const userLogged = await request(app).post("/login").send(sessionPayload);
    const token = userLogged.body.token;

    const invalidBody = mockedCarInvalidBodyRequest;
    const response = await request(app)
      .post(baseUrl)
      .set("Authorization", `Bearer ${token}`)
      .send(invalidBody);

    const expectResults = {
      status: 400,
      bodyToHaveProperty: "error",
    };

    expect(response.status).toBe(expectResults.status);
    expect(response.body).toHaveProperty(expectResults.bodyToHaveProperty);
  });
});
