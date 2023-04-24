export interface IUserRequest {
  name: string;
  email: string;
  telephone: string;
  password: string;
  cpf: string;
  description: string;
  image_url: string;
  isSeller: boolean;
  birthdate: Date;
}

export interface iOmitClientPassword extends Omit<IUserRequest, "password"> {}

export interface IUserResponse extends iOmitClientPassword {
  id: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  cpf?: string;
  telephone?: string;
  birthdate?: Date;
  description?: string;
  password?: string;
  image_url?: string;
  isSeller?: boolean;
}
