import appDataSource from "../../data-source"
import { Brand } from "../../entities"
import { IBrandResponse } from "../../interfaces/car.interfaces"

export const listBrandsService = async (): Promise<IBrandResponse[]> => {

    const brandRepository = appDataSource.getRepository(Brand)

    const barnd_arr = await brandRepository.find()

    return barnd_arr

}
