import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarResponse } from "../../interfaces/car";

export const carResponseSchema: SchemaOf<ICarResponse> = yup.object().shape({
  id: yup.string().required(),
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  km: yup.number().required(),
  color: yup.string().required(),
  price: yup.number().required(),
  fipe: yup.number().required(),
  description: yup.string().required(),
  is_good_price: yup.boolean().required(),
  published: yup.boolean().required(),
  cover_image: yup.string().required(),
});
