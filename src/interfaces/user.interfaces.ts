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

export interface IUserResponse {
  id: string
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

export interface IUserLogin {
  email: string;
  password: string;
}
