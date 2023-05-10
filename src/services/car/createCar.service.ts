import { User } from "../../entities";
import { AppError } from "../../error/appError.error";
import { IBrandResponse, ICarRequest } from "../../interfaces/car";
import { carResponseSchema } from "../../schemas/car";
import { brandRepo, carRepo, userRepo } from "../../utils/repositories";

export const createCarService = async (
  carData: ICarRequest,
  userId: string,
) => {

  console.log(carData, "=============================")

  const userData = await userRepo.findOneBy({
    id: userId,
  });

  if(!userData){
    throw new AppError("user not found", 404)
  }

  const getBrand = await brandRepo.findOneBy({ name: carData.brand });

  let brand: IBrandResponse | null = getBrand

  if(!brand){

    const newBrand = brandRepo.create({name: carData.brand})
    await brandRepo.save(newBrand)

    brand = newBrand

  }

  let carImage = ""

  if(!carData.cover_image){
    carImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwHeo1aZFE29ryE5ZNrOA1SvJ0Xe_wXt5FnqqvI68h1m10xjF7fRHRoWoO5H2fX7xPPw&usqp=CAU"
  }else{
    carImage = carData.cover_image
  }

  const car = {
    ...carData,
    brand_car: brand,
    user: userData
  };

  const newCar = carRepo.create({...car, cover_image: carImage});
  await carRepo.save(newCar);

  const returnCar = await carResponseSchema.validate(newCar, {
    stripUnknown: true,
  });

  return returnCar;

};
