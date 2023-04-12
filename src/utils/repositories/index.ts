import AppDataSource from "../../data-source";
import { Car, User } from "../../entities";

const userRepo = AppDataSource.getRepository(User);
const carRepo = AppDataSource.getRepository(Car);

export { userRepo, carRepo };
