import * as yup from "yup";
import { ICommentResponse } from "../../interfaces/comments";

export const commentListAllSchema: yup.SchemaOf<ICommentResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    comment: yup.string().required(),
    createdAt: yup.date().required(),
    users: yup.object().shape({
      id: yup.string().required(),
      birthdate: yup.string().required(),
      isSeller: yup.boolean().required(),
      image_url: yup.string().required(),
      description: yup.string().required(),
      cpf: yup.string().required(),
      telephone: yup.string().required(),
      email: yup.string().email().required(),
      name: yup.string().required(),
      isActive: yup.boolean().required(),
      reset_token: yup.string().required(),
    }),
  });
