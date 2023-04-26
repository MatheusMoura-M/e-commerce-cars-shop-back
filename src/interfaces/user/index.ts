export interface IUserRequest {
  image_url: string;
  isSeller: boolean;
  birthdate: Date;
  description: string;
  telephone: string;
  cpf: string;
  email: string;
  name: string;
  state: string;
  city: string;
  street: string;
  number: string;
  zipcode: string;
  complement: string;
  password: string;
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

export interface ISendEmailRequest {
  to: string;
  subject: string;
  text: string;
}
