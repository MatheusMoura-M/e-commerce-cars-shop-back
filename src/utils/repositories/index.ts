import appDataSource from "../../data-source";
import { Brand, Car, ImageCar, User } from "../../entities";

const userRepo = appDataSource.getRepository(User);
const carRepo = appDataSource.getRepository(Car);
const imageRepo = appDataSource.getRepository(ImageCar);
const brandRepo = appDataSource.getRepository(Brand);

export { userRepo, carRepo, imageRepo, brandRepo };
