import * as yup from "yup";
import { Schema } from "yup";
import { ICar, ICarUpdate } from "../interfaces/car.interfaces";

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

export const carResponseSerializer: Schema<ICar> = yup.object().shape({
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
