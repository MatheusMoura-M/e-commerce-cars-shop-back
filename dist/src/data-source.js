"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
const _1683218674419_initials_1 = require("./migrations/1683218674419-initials");
const DataSourceSettings = () => {
    const entities = [entities_1.User, entities_1.Car, entities_1.ImageCar, entities_1.Brand, entities_1.Address, entities_1.Comments];
    const migrations = [_1683218674419_initials_1.initials1683218674419];
    const node_env = process.env.NODE_ENV;
    if (node_env === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities,
            migrations,
        };
    }
    else if (node_env === "test") {
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
const appDataSource = new typeorm_1.DataSource(dataSource);
exports.default = appDataSource;
//# sourceMappingURL=data-source.js.map