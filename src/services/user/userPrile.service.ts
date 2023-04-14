import appDataSource from "../../data-source";
import { User } from "../../entities";
import { IUserResponse } from "../../interfaces/user.interfaces";

export const userProfileService = async (id_user: string): Promise<IUserResponse> => {

    const userRepository = appDataSource.getRepository(User);

    const getUser = await userRepository.findOneBy({id: id_user})

    return getUser

}