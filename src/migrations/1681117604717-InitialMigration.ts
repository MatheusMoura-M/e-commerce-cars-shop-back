import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1681117604717 implements MigrationInterface {
    name = 'InitialMigration1681117604717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "published" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ALTER COLUMN "published" DROP DEFAULT`);
    }

}
