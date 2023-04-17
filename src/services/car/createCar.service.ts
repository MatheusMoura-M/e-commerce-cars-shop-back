import { User } from "../../entities/user.entity";
import { ICarRequest } from "../../interfaces/car.interfaces";
import { carResponseSerializer } from "../../schemas/car.schemas";
import { brandRepo, carRepo, userRepo } from "../../utils/repositories";

export const createCarService = async (
  carData: ICarRequest,
  email: string,
  isGoodPrice: boolean
) => {
  const userData = await userRepo.findOneBy({
    email: email,
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

  const returnCar = await carResponseSerializer.validate(newCar, {
    stripUnknown: true,
  });

  return returnCar;
};
