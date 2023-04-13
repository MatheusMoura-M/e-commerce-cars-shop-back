import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entity";
import { User } from "../../entities/user.entity";
import { ICarRequest } from "../../interfaces/car.interfaces";
import { carResponseSerializer } from "../../schemas/car.schemas";

export const createCarService = async (
  carData: ICarRequest,
  email: string,
  isGoodPrice: boolean
) => {
  const contactRepository = AppDataSource.getRepository(Car);
  const userRepository = AppDataSource.getRepository(User);

  const userData = await userRepository.findOneBy({
    email: email,
  });

  const contact = {
    ...carData,
    user: userData as User,
    is_good_price: isGoodPrice,
  };

  const newCar = contactRepository.create(contact);
  await contactRepository.save(newCar);

  const returnCar = await carResponseSerializer.validate(newCar, {
    stripUnknown: true,
  });

  return returnCar;
};
