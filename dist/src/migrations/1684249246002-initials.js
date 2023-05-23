"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initials1684249246002 = void 0;
class initials1684249246002 {
    constructor() {
        this.name = 'initials1684249246002';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "email" character varying(127) NOT NULL, "cpf" character varying NOT NULL, "password" character varying NOT NULL, "telephone" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "description" character varying NOT NULL, "image_url" character varying NOT NULL, "isSeller" boolean NOT NULL DEFAULT false, "birthdate" character varying NOT NULL, "reset_token" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(100) NOT NULL, "model" character varying(100) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(20) NOT NULL, "km" numeric(5) NOT NULL, "color" character varying(20) NOT NULL, "price" character varying NOT NULL, "fipe" numeric(10) NOT NULL, "description" character varying(300) NOT NULL, "is_good_price" boolean NOT NULL, "published" boolean NOT NULL DEFAULT true, "cover_image" character varying(300) NOT NULL, "userId" uuid, "brandCarId" uuid, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image_url" character varying NOT NULL, "carId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "brands" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "zipcode" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying NOT NULL, "userId" uuid, CONSTRAINT "REL_d25f1ea79e282cc8a42bd616aa" UNIQUE ("userId"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "usersId" uuid, "carsId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_4fee63848adda4f74d39d567517" FOREIGN KEY ("brandCarId") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c966d343d95687961368797192e" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_065338fbfc15984038082f46bd1" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_ca9115c55e0b4670fbda28cd0ff" FOREIGN KEY ("carsId") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_ca9115c55e0b4670fbda28cd0ff"`);
            yield queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_065338fbfc15984038082f46bd1"`);
            yield queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
            yield queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c966d343d95687961368797192e"`);
            yield queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_4fee63848adda4f74d39d567517"`);
            yield queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_6431b6fec12c4090bb357fba2c2"`);
            yield queryRunner.query(`DROP TABLE "comments"`);
            yield queryRunner.query(`DROP TABLE "address"`);
            yield queryRunner.query(`DROP TABLE "brands"`);
            yield queryRunner.query(`DROP TABLE "images"`);
            yield queryRunner.query(`DROP TABLE "cars"`);
            yield queryRunner.query(`DROP TABLE "users"`);
        });
    }
}
exports.initials1684249246002 = initials1684249246002;
//# sourceMappingURL=1684249246002-initials.js.map