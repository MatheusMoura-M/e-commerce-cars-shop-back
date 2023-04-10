import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 100 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column({ length: 20 })
  fuel: string;

  @Column({ type: "decimal", precision: 3 })
  km: number;

  @Column({ length: 20 })
  color: string;

  @Column({ type: "decimal", precision: 10 })
  price: number;

  @Column({ type: "decimal", precision: 10 })
  fipe: number;

  @Column({ length: 300 })
  description: string;

  @Column()
  is_good_price: boolean;

  @Column({ default: true })
  published: boolean;

  @Column({ length: 300 })
  cover_image: string;

  @ManyToOne(() => User, (user) => user.cars)
  user: User;
}
