import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarUpdate, ICarUpdateResponse } from "../interfaces/car.interfaces";

export const carUpdateSerializer: SchemaOf<ICarUpdate> = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  km: yup.number().notRequired(),
  color: yup.string().notRequired(),
  price: yup.number().notRequired(),
  fipe: yup.number().notRequired(),
  description: yup.string().notRequired(),
  is_good_price: yup.boolean().notRequired(),
  published: yup.boolean().notRequired(),
  cover_image: yup.string().notRequired(),
});

export const carResponseSerializer: SchemaOf<ICarUpdateResponse> = yup
  .object()
  .shape({
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
