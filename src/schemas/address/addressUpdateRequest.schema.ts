import * as yup from "yup";
import { iAddressUpdateRequest } from "../../interfaces/user";

export const addressUpdateRequestSchema: yup.SchemaOf<iAddressUpdateRequest> =
  yup.object().shape({
    street: yup.string().notRequired(),
    zipcode: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired(),
    city: yup.string().notRequired(),
    state: yup.string().notRequired(),
  });

  export const addressResponseSchema: yup.SchemaOf<iAddressUpdateRequest> =
  yup.object().shape({
    id: yup.string().required(),
    street: yup.string().notRequired(),
    zipcode: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired(),
    city: yup.string().notRequired(),
    state: yup.string().notRequired()
  });
