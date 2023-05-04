import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./car.entity";

@Entity("images")
export class ImageCar{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    image_url: string

    @ManyToOne(() => Car, car => car.images)
    car: Car
}