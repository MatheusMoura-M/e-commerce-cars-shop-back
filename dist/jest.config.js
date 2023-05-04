"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    coverageProvider: "v8",
    preset: "ts-jest",
    testPathIgnorePatterns: ["dist"],
    testMatch: [
        "**__tests__/**/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    modulePathIgnorePatterns: ["mocks"],
};
//# sourceMappingURL=jest.config.js.map