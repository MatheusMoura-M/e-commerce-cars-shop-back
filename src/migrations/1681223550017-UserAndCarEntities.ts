import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAndCarEntities1681223550017 implements MigrationInterface {
    name = 'UserAndCarEntities1681223550017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(100) NOT NULL, "model" character varying(100) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(20) NOT NULL, "km" numeric(3) NOT NULL, "color" character varying(20) NOT NULL, "price" numeric(10) NOT NULL, "fipe" numeric(10) NOT NULL, "description" character varying(300) NOT NULL, "is_good_price" boolean NOT NULL, "published" boolean NOT NULL DEFAULT true, "cover_image" character varying(300) NOT NULL, "userId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "email" character varying(127) NOT NULL, "cpf" character varying(11) NOT NULL, "password" character varying(120) NOT NULL, "telephone" character varying(12) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "description" character varying(300) NOT NULL, "image_url" character varying(300) NOT NULL, "isSeller" boolean NOT NULL DEFAULT false, "birthdate" TIMESTAMP NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "cars"`);
    }

}
