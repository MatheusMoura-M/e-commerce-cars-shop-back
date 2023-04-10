import AppDataSource from "../../data-source";
import { Car } from "../../entities/car.entity";
import { User } from "../../entities/user.entity";
import { ICarRequest } from "../../interfaces/car.interfaces";

export const createCarService = async (carData: ICarRequest, email: string) => {
  const contactRepository = AppDataSource.getRepository(Car);
  const userRepository = AppDataSource.getRepository(User);

  const userData = await userRepository.findOneBy({
    email: email,
  });

  const contact = {
    ...carData,
    user: userData as User,
  };

  const newCar = contactRepository.create(contact);
  await contactRepository.save(newCar);

  return newCar;
};
