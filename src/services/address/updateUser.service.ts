import { AppError } from "../../error/appError.error";
import {
  iAddressUpdateRequest,
  iAddressUpdateResponse,
} from "../../interfaces/user";
import { addressUpdateResponseSchema } from "../../schemas/address";
import { userRepo } from "../../utils/repositories";
import { addressRepo } from "../../utils/repositories";

export const updateAddressService = async (
  id: string,
  payload: iAddressUpdateRequest
): Promise<iAddressUpdateResponse> => {
  const userFound = await userRepo.findOne({
    where: {
      id: id,
    },
    relations: {
      address: true,
    },
  });

  if (!userFound) {
    throw new AppError("User not found!", 404);
  }

  const addressFound = await addressRepo.findOneBy({
    id: userFound.address.id,
  });

  const addressUpdated = {
    ...addressFound,
    ...payload,
  };

  await addressRepo.save(addressUpdated);

  const addressValidated = await addressUpdateResponseSchema.validate(
    addressUpdated,
    {
      stripUnknown: true,
    }
  );

  return addressValidated;
};
