import * as yup from "yup";
import { Schema } from "yup";
import { ICarUpdate } from "../interfaces/car.interfaces";

export const carUpdateSerializer: Schema<ICarUpdate> = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  km: yup.number().notRequired(),
  color: yup.string().notRequired(),
  price: yup.number().notRequired(),
  fipe: yup.number().notRequired(),
  description: yup.string().notRequired(),
  is_good_price: yup.boolean(),
  published: yup.boolean(),
  cover_image: yup.string().notRequired(),
});
