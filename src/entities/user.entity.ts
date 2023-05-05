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

  @Column({ length: 127 })
  email: string;

<<<<<<< HEAD
  @Column({ length: 14, unique: true })
=======
  @Column()
>>>>>>> 84db32b4a30a570bcc4719acbc854400b2965d3d
  cpf: string;

  @Column()
  password: string;

<<<<<<< HEAD
  @Column({ length: 15 })
=======
  @Column()
>>>>>>> 84db32b4a30a570bcc4719acbc854400b2965d3d
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
