import * as yup from "yup";
import { iAddressUpdateResponse } from "../../interfaces/user";

export const addressUpdateResponseSchema: yup.SchemaOf<iAddressUpdateResponse> =
  yup.object().shape({
    street: yup.string().notRequired(),
    zipcode: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired(),
    city: yup.string().notRequired(),
    state: yup.string().notRequired(),
    id: yup.string().notRequired(),
  });
