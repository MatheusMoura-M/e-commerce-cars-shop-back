import { MigrationInterface, QueryRunner } from "typeorm";

export class addResetToken1682521839499 implements MigrationInterface {
    name = 'addResetToken1682521839499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`);
    }

}
