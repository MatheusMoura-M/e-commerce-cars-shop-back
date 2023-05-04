import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  zipcode: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @OneToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  @JoinColumn()
  user: User;
}
