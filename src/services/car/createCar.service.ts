import { User } from "../../entities";
import { ICarRequest } from "../../interfaces/car";
import { carResponseSchema } from "../../schemas/car";
import { brandRepo, carRepo, userRepo } from "../../utils/repositories";

export const createCarService = async (
  carData: ICarRequest,
  userEmail: string,
  isGoodPrice: boolean
) => {
  const userData = await userRepo.findOneBy({
    email: userEmail,
  });

  const getBrand = await brandRepo.findOneBy({ name: carData.brand });

  const car = {
    ...carData,
    user: userData as User,
    is_good_price: isGoodPrice,
    brand_car: getBrand,
  };

  const newCar = carRepo.create(car);
  await carRepo.save(newCar);

  const returnCar = await carResponseSchema.validate(newCar, {
    stripUnknown: true,
  });

  return returnCar;
};
