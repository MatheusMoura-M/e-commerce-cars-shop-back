"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedInvalidPasswordSession = exports.mockedInvalidEmailSession = exports.mockedInvalidBodySession = exports.mockedUser2Session = exports.mockedUserSession = void 0;
const index_1 = require("../index");
const mockedUserSession = {
    userPayload: index_1.mockedUserRequest,
    sessionPayload: {
        email: index_1.mockedUserRequest.email,
        password: index_1.mockedUserRequest.password,
    },
};
exports.mockedUserSession = mockedUserSession;
const mockedUser2Session = {
    userPayload: index_1.mockedUser2Request,
    sessionPayload: {
        email: index_1.mockedUser2Request.email,
        password: index_1.mockedUser2Request.password,
    },
};
exports.mockedUser2Session = mockedUser2Session;
const mockedInvalidBodySession = {};
exports.mockedInvalidBodySession = mockedInvalidBodySession;
const mockedInvalidEmailSession = {
    userPayload: index_1.mockedUserRequest,
    sessionPayload: {
        email: "mail@mail.com",
        password: index_1.mockedUserRequest.password,
    },
};
exports.mockedInvalidEmailSession = mockedInvalidEmailSession;
const mockedInvalidPasswordSession = {
    userPayload: index_1.mockedUserRequest,
    sessionPayload: {
        email: index_1.mockedUserRequest.email,
        password: "invalidPassword",
    },
};
exports.mockedInvalidPasswordSession = mockedInvalidPasswordSession;
//# sourceMappingURL=session.mocks.js.map