import appDataSource from "../../data-source";
import { Address, Brand, Car, Comments, ImageCar, User } from "../../entities";

const userRepo = appDataSource.getRepository(User);
const carRepo = appDataSource.getRepository(Car);
const imageRepo = appDataSource.getRepository(ImageCar);
const brandRepo = appDataSource.getRepository(Brand);
const addressRepo = appDataSource.getRepository(Address);
const commentsRepo = appDataSource.getRepository(Comments);

export { userRepo, carRepo, imageRepo, brandRepo, addressRepo, commentsRepo };
