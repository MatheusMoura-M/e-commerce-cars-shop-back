import { IUserRequest, IUserLogin } from "../user";

interface ICreateSessionPayloadMock {
  userPayload: IUserRequest;
  sessionPayload: IUserLogin;
}

interface ICreateSessionPayloadMock2 {
  userPayload2: IUserRequest;
  sessionPayload2: IUserLogin;
}

interface IDecodedToken {
  email: string;
  isAdm: boolean;
  iat: number;
  ext: number;
  sub: string;
}

export { ICreateSessionPayloadMock, ICreateSessionPayloadMock2, IDecodedToken };
