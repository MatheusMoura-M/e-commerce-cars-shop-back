import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Car } from "./car.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 12 })
  telephone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ length: 300 })
  description: string;

  @Column({ length: 300 })
  image_url: string;

  @Column({ default: false })
  isSeller: boolean;

  @Column()
  birthdate: Date;

  @OneToMany(() => Car, (car) => car.user, { cascade: true })
  cars: Car[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
