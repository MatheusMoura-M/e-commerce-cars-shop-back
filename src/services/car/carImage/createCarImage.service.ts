import appDataSource from "../../../data-source";
import { Car, ImageCar } from "../../../entities";
import { AppError } from "../../../error/appError.error";
import { ICarImageResponse } from "../../../interfaces/car.interfaces";

export const createCarImageService = async (url_image: string, id: string, id_user: string): Promise<ICarImageResponse>  => {

    const carRepository = appDataSource.getRepository(Car)
    const imageRepository = appDataSource.getRepository(ImageCar)

    const findCar = await carRepository.findOneBy({id: id})
    
    if(!findCar){
        throw new AppError("Car not found", 404)
    }

    const is_Owner = await carRepository.createQueryBuilder("cars")
    .innerJoinAndSelect("cars.user", "user")
    .where("cars.id = :id_car", {id_car: id})
    .andWhere("user.id = :id_user", {id_user: id_user})
    .getOne()

    if (!is_Owner) {
        throw new AppError("You don't have permission to delete this car", 403);
    }

    const createImage = imageRepository.create({image_url: url_image, car: findCar})
    await imageRepository.save(createImage)

    return createImage

}