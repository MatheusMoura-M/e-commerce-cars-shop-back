import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { User, Comments, Brand, ImageCar } from "./index";

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

  @Column({ type: "decimal", precision: 5 })
  km: number;

  @Column({ length: 20 })
  color: string;

  @Column()
  price: string;

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

  @ManyToOne(() => User, (user) => user.cars, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Comments, (comments) => comments.cars, { cascade: true })
  comments: Comments[];

  @OneToMany(() => ImageCar, (image) => image.car, { cascade: true })
  images: ImageCar[];

  @ManyToOne(() => Brand, (brand) => brand.cars)
  brand_car: Brand;
}
