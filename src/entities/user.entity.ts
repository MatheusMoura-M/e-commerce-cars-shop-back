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
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 127 })
  email: string;

  @Column()
  cpf: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  telephone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @Column({ default: false })
  isSeller: boolean;

  @Column()
  birthdate: string;

  @Column({ nullable: true })
  reset_token: string;

  @OneToMany(() => Car, (car) => car.user, { cascade: true })
  @JoinColumn()
  cars: Car[];

  @OneToMany(() => Comments, (comments) => comments.users, { cascade: true })
  comments: Comments[];

  @OneToOne(() => Address, (address) => address.id, { onDelete: "CASCADE" })
  address: Address;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
