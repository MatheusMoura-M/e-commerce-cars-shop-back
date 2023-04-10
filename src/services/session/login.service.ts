import { IUserLogin } from "../../interfaces/user.interfaces";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../error/appError.error";

export const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<{ token: string }> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("User not found!", 404);
  }

  const passwordCheck = await compare(password, user?.password as string);

  if (!passwordCheck) {
    throw new AppError("Invalid User or password!", 403);
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      subject: String(user.id),
      expiresIn: "24h",
    }
  );

  return { token: token };
};
