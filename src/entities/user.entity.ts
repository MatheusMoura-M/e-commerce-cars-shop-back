import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Car, Comments, Address } from "./index";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  cpf: string;

  @Column({ length: 120 })
  password: string;

  @Column({ length: 15 })
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
  birthdate: string;

  @Column({ nullable: true })
  reset_token: string;

  @OneToMany(() => Car, (car) => car.user, { cascade: true })
  cars: Car[];

  @OneToMany(() => Comments, (comments) => comments.users, { cascade: true })
  comments: Comments[];

  @OneToOne(() => Address, (address) => address.id, { cascade: true })
  @JoinColumn()
  address: Address;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
