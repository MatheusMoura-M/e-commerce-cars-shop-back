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
  is_good_price: boolean;
  published: boolean;
  cover_image: string;
}

export interface ICar {
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
  user: User;
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
  is_good_price?: boolean;
  published?: boolean;
  cover_image?: string;
}

export interface ICarUpdateResponse {
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
