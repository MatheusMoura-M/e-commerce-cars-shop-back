export interface ICommentRequest {
  comment: string;
}

export interface ICommentResponse extends ICommentRequest {
  id: string;
}

export interface ICommentListResponse {
  id: string;
  comment: string;
  createdAt: Date;
  users: {
    id: string;
    birthdate: string;
    isSeller: boolean;
    image_url: string;
    description: string;
    cpf: string;
    telephone: string;
    email: string;
    name: string;
    isActive: boolean;
    reset_token: null | string;
  };
}
