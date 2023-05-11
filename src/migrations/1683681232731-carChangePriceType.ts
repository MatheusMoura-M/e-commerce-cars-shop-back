import { MigrationInterface, QueryRunner } from "typeorm";

export class carChangePriceType1683681232731 implements MigrationInterface {
    name = 'carChangePriceType1683681232731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "price" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "price" numeric(10,0) NOT NULL`);
    }

}
