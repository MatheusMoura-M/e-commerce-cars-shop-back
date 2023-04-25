import appDataSource from "../../data-source";
import { Address, Brand, Car, ImageCar, User } from "../../entities";

const userRepo = appDataSource.getRepository(User);
const carRepo = appDataSource.getRepository(Car);
const imageRepo = appDataSource.getRepository(ImageCar);
const brandRepo = appDataSource.getRepository(Brand);
const addressRepo = appDataSource.getRepository(Address)

export { userRepo, carRepo, imageRepo, brandRepo, addressRepo };
