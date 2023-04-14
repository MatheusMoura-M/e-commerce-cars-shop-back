import appDataSource from "../../../data-source"
import { Car, ImageCar } from "../../../entities"
import { AppError } from "../../../error/appError.error"

export const deleteCarImageService = async  (id_image: string, id_user: string): Promise<void> => {

    const imageRepository = appDataSource.getRepository(ImageCar)
    const carRepository = appDataSource.getRepository(Car)

    const is_image = await imageRepository.findOneBy({id: id_image})

    const is_Owner = await carRepository.createQueryBuilder("cars")
    .innerJoinAndSelect("cars.user", "user")
    .innerJoinAndSelect("cars.images", "image")
    .where("image.id = :id_image", {id_image: id_image})
    .andWhere("user.id = :id_user", {id_user: id_user})
    .getOne()

    if (!is_Owner) {
        throw new AppError("You don't have permission to delete this car", 403);
    }

    if(!is_image){
        throw new AppError("image not found", 404)
    }

    await imageRepository.delete({id: id_image})

}