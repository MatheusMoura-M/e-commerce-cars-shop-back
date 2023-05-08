import { addressResponseSchema } from "../../schemas/address/addressUpdateRequest.schema"
import { addressRepo, userRepo } from "../../utils/repositories"

export const getUserAddressLoggedService = async (idUser: string) => {

   const address = await addressRepo.createQueryBuilder("address")
   .innerJoinAndSelect("address.user", "user")
   .where("user.id = :id", {id: idUser})
   .getOne()

   const responseFormated = addressResponseSchema.validate(address, {
    stripUnknown: true
   })

   return responseFormated

}