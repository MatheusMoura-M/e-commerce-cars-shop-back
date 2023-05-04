import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entity";

@Entity("brands")
export class Brand {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Car, (car) => car.brand_car)
  cars: Car[];
}
