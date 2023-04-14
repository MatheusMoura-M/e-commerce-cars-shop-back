import appDataSource from "../../../data-source"
import { Car } from "../../../entities"
import { AppError } from "../../../error/appError.error"
import { ICarImageResponse } from "../../../interfaces/car.interfaces"

export const listCarImageService = async (id: string): Promise<ICarImageResponse[]> => {

    const carRepository = appDataSource.getRepository(Car)
    
    const findCar = await carRepository.findOneBy({id: id})

    if(!findCar){
        throw new AppError("Car not found", 404)
    }

    const images = await carRepository.findOne({
        where:{
            id: id
        },
        relations:{
            images: true
        }
    })

    return images.images

}