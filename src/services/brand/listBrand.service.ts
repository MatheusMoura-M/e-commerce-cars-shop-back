import { IBrandResponse } from "../../interfaces/car";
import { brandRepo } from "../../utils/repositories";

export const listBrandsService = async (): Promise<IBrandResponse[]> => {
  const brand_arr = await brandRepo.find();

  return brand_arr;
};
