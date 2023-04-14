import { User } from "../entities/user.entity";

export interface ICarRequest {
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  price: number;
  fipe: number;
  description: string;
  published: boolean;
  cover_image: string;
}

export interface ICarUpdate {
  brand?: string;
  model?: string;
  year?: string;
  fuel?: string;
  km?: number;
  color?: string;
  price?: number;
  fipe?: number;
  description?: string;
  published?: boolean;
  cover_image?: string;
}

export interface ICarResponse {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  price: number;
  fipe: number;
  description: string;
  is_good_price: boolean;
  published: boolean;
  cover_image: string;
}

export interface ICarImageResponse {
  id: string,
  image_url: string,
  car?: ICarResponse
}

export interface IBrandResponse{
  id: string,
  name: string
}
