import { ICreateSessionPayloadMock } from "../../../interfaces/mocks";
import { mockedUser2Request, mockedUserRequest } from "../index";

const mockedUserSession: ICreateSessionPayloadMock = {
  userPayload: mockedUserRequest,
  sessionPayload: {
    email: mockedUserRequest.email,
    password: mockedUserRequest.password,
  },
};

const mockedUser2Session: ICreateSessionPayloadMock = {
  userPayload: mockedUser2Request,
  sessionPayload: {
    email: mockedUser2Request.email,
    password: mockedUser2Request.password,
  },
};

const mockedInvalidBodySession: object = {};

const mockedInvalidEmailSession: ICreateSessionPayloadMock = {
  userPayload: mockedUserRequest,
  sessionPayload: {
    email: "mail@mail.com",
    password: mockedUserRequest.password,
  },
};

const mockedInvalidPasswordSession: ICreateSessionPayloadMock = {
  userPayload: mockedUserRequest,
  sessionPayload: {
    email: mockedUserRequest.email,
    password: "invalidPassword",
  },
};

export {
  mockedUserSession,
  mockedUser2Session,
  mockedInvalidBodySession,
  mockedInvalidEmailSession,
  mockedInvalidPasswordSession,
};
