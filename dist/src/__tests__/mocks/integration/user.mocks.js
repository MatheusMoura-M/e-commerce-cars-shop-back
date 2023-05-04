"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockedUserResponseTest = exports.mockedUser2Response = exports.mockedUser2Request = exports.mockedUserInvalidBodyRequest = exports.mockedUserResponse = exports.mockedUserRequest = void 0;
const mockedUserRequest = {
    name: "user1",
    email: "user1@gmail.com",
    telephone: "11111111",
    password: "111111",
    cpf: "11111111",
    description: "desenvolvedor",
    image_url: "url da imagem aqui",
    isSeller: false,
    birthdate: "11/11/1111",
};
exports.mockedUserRequest = mockedUserRequest;
const mockedUserResponse = {
    name: "user1",
    email: "user1@gmail.com",
    telephone: "11111111",
    cpf: "11111111",
    description: "desenvolvedor",
    image_url: "url da imagem aqui",
    isSeller: false,
    birthdate: "11/11/1111",
};
exports.mockedUserResponse = mockedUserResponse;
const mockedUserResponseTest = {
    name: "user1",
    email: "user1@gmail.com",
    telephone: "11111111",
    cpf: "11111111",
    description: "desenvolvedor",
    image_url: "url da imagem aqui",
    isSeller: false,
};
exports.mockedUserResponseTest = mockedUserResponseTest;
const mockedUser2Request = {
    name: "user2",
    email: "user2@gmail.com",
    telephone: "22222222222",
    password: "222222222",
    cpf: "222222222",
    description: "desenvolvedor2",
    image_url: "url da imagem2 aqui",
    isSeller: false,
    birthdate: "11/11/1111",
};
exports.mockedUser2Request = mockedUser2Request;
const mockedUser2Response = {
    name: "user2",
    email: "user2@gmail.com",
    telephone: "22222222222",
    cpf: "222222222",
    description: "desenvolvedor2",
    image_url: "url da imagem2 aqui",
    isSeller: false,
    birthdate: "11/11/1111",
};
exports.mockedUser2Response = mockedUser2Response;
const mockedUserInvalidBodyRequest = {
    name: "commonUser",
    email: "common@gmail.com",
};
exports.mockedUserInvalidBodyRequest = mockedUserInvalidBodyRequest;
//# sourceMappingURL=user.mocks.js.map