import * as yup from "yup";
import { IUserRequest } from "../../interfaces/user";

export const userCreateRequestSchema: yup.SchemaOf<IUserRequest> = yup
  .object()
  .shape({
    image_url: yup.string().required(),
    isSeller: yup.boolean().required(),
    birthdate: yup.date().required(),
    description: yup.string().required(),
    telephone: yup.string().required(),
    password: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
  });
