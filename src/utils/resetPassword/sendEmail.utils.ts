import { createTransport } from "nodemailer";
import { ISendEmailRequest } from "../../interfaces/user";
import { AppError } from "../../error/appError.error";

export const sendEmail = async ({ to, subject, text }: ISendEmailRequest) => {
  const transporter = createTransport({
    host: "smpt.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter
    .sendMail({
      from: "milfonts2@gmail.com",
      to,
      subject,
      html: text,
    })
    .then(() => {
      console.log("Email foi enviado com sucesso!");
    })
    .catch((err) => {
      console.log(err);
      throw new AppError("Error sending email, try again later.", 500);
    });
};
