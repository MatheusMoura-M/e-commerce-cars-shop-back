import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
} from "typeorm";
import { hashSync } from "bcryptjs";

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

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
