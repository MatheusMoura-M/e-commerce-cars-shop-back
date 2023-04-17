import { IUserRequest, iOmitClientPassword } from "../../../interfaces/user";

const mockedUserRequest: IUserRequest = {
  name: "user1",
  email: "user1@gmail.com",
  telephone: "11111111",
  password: "111111",
  cpf: "11111111",
  description: "desenvolvedor",
  image_url: "url da imagem aqui",
  isSeller: false,
  birthdate: new Date(),
};

const mockedUserResponse: iOmitClientPassword = {
  name: "user1",
  email: "user1@gmail.com",
  telephone: "11111111",
  cpf: "11111111",
  description: "desenvolvedor",
  image_url: "url da imagem aqui",
  isSeller: false,
  birthdate: new Date(),
};

const mockedUserResponseTest = {
  name: "user1",
  email: "user1@gmail.com",
  telephone: "11111111",
  cpf: "11111111",
  description: "desenvolvedor",
  image_url: "url da imagem aqui",
  isSeller: false,
};

const mockedUser2Request: IUserRequest = {
  name: "user2",
  email: "user2@gmail.com",
  telephone: "22222222222",
  password: "222222222",
  cpf: "222222222",
  description: "desenvolvedor2",
  image_url: "url da imagem2 aqui",
  isSeller: false,
  birthdate: new Date(),
};

const mockedUser2Response: iOmitClientPassword = {
  name: "user2",
  email: "user2@gmail.com",
  telephone: "22222222222",
  cpf: "222222222",
  description: "desenvolvedor2",
  image_url: "url da imagem2 aqui",
  isSeller: false,
  birthdate: new Date(),
};

const mockedUserInvalidBodyRequest = {
  name: "commonUser",
  email: "common@gmail.com",
};

export {
  mockedUserRequest,
  mockedUserResponse,
  mockedUserInvalidBodyRequest,
  mockedUser2Request,
  mockedUser2Response,
  mockedUserResponseTest,
};
