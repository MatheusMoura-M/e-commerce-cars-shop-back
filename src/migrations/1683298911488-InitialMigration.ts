import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683298911488 implements MigrationInterface {
    name = 'InitialMigration1683298911488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "telephone" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "telephone" character varying(12) NOT NULL`);
    }

}
