export interface ICommentRequest {
  comment: string;
}

export interface ICommentResponse extends ICommentRequest {
  id: string;
}
