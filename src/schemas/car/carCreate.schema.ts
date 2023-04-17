import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICarRequest } from "../../interfaces/car.interfaces";

export const carCreateSchema: SchemaOf<ICarRequest> = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  km: yup.number().required(),
  color: yup.string().required(),
  price: yup.number().required(),
  fipe: yup.number().required(),
  description: yup.string().required(),
  published: yup.boolean().required(),
  cover_image: yup.string().required(),
});
