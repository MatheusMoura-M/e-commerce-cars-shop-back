import path from "path";
import "reflect-metadata";
import { DataSourceOptions, DataSource } from "typeorm";
import "dotenv/config";

const DataSourceSettings = (): DataSourceOptions => {
  const entities = [path.join(__dirname, "src/entities/**.{js,ts}")];
  const migrations = [path.join(__dirname, "src/migrations/**.{js,ts}")];

  const node_env = process.env.NODE_ENV;

  if (node_env === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities,
      migrations,
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
