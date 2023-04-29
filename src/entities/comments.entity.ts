import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User, Car } from "./index";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  users: User;

  @ManyToOne(() => Car, (car) => car.id, {
    onDelete: "CASCADE",
  })
  cars: Car;

  @Column()
  comment: string;

  @CreateDateColumn()
  createdAt: Date;
}
