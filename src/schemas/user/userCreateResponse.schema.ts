import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserResponse } from "../../interfaces/user";

export const userCreateAndUpdateResponseSchema: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    image_url: yup.string().required(),
    isSeller: yup.boolean().required(),
    birthdate: yup.date().required(),
    description: yup.string().required(),
    telephone: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });
