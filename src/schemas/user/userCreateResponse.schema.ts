import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserResponse } from "../../interfaces/user";

export const userCreateAndUpdateResponseSchema: SchemaOf<IUserResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    image_url: yup.string().required(),
    isSeller: yup.boolean().required(),
    birthdate: yup.date().required(),
    description: yup.string().required(),
    telephone: yup.string().required(),
    cpf: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    zipcode: yup.string().required(),
    complement: yup.string().required()
  });
