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
  is_good_price: boolean
}

export interface ICarResponse extends ICarRequest {
  id: string;
  is_good_price: boolean;
}

export interface ICarResponseTest extends ICarRequest {
  is_good_price: boolean;
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

export interface ICarImageResponse {
  id: string;
  image_url: string;
  car?: ICarResponse;
}

export interface IBrandResponse {
  id: string;
  name: string;
}
