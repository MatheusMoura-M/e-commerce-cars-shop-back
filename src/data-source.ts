import path from "path";
import "reflect-metadata";
import { DataSourceOptions, DataSource } from "typeorm";
import "dotenv/config";
import { Brand, Car, ImageCar, User, Address } from "./entities";
import { initials1682358029844 } from "./migrations/1682358029844-initials";
import { createAddress1682436581411 } from "./migrations/1682436581411-create-address";

const DataSourceSettings = (): DataSourceOptions => {
  const entities = [User, Car, ImageCar, Brand, Address];
  const migrations = [initials1682358029844, createAddress1682436581411];

  const node_env = process.env.NODE_ENV;

  if (node_env === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities,
      migrations,
    };
  } else if (node_env === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      entities,
      migrations,
      synchronize: true,
    };
  }

  return {
    type: "postgres",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities,
    migrations,
  };
};

const dataSource = DataSourceSettings();
const appDataSource = new DataSource(dataSource);

export default appDataSource;
