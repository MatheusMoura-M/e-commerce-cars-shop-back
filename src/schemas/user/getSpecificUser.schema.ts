import * as yup from "yup";
import { SchemaOf } from "yup";
import { iGetUserResponse } from "../../interfaces/user";

export const getSpecificUserSchema: SchemaOf<iGetUserResponse> = yup
  .object()
  .shape({
    birthdate: yup.string().required(),
    isSeller: yup.boolean().required(),
    image_url: yup.string().required(),
    description: yup.string().required(),
    cpf: yup.string().required(),
    telephone: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  });
