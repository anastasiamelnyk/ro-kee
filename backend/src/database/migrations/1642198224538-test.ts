import {MigrationInterface, QueryRunner} from "typeorm";

export class test1642198224538 implements MigrationInterface {
    name = 'test1642198224538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "nickname" character varying NOT NULL, "email" character varying NOT NULL, "isEmailConfirmed" boolean NOT NULL DEFAULT false, "passwordHash" character varying NOT NULL, CONSTRAINT "PK_a95e949168be7b7ece1a2382fed" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`CREATE TABLE "token" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "token" character varying NOT NULL, "userUuid" uuid, CONSTRAINT "PK_a9a66098c2fb758dff713f8d838" PRIMARY KEY ("uuid"))`);
        await queryRunner.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_baf6f8c56720ff78a877db2bbef" FOREIGN KEY ("userUuid") REFERENCES "user"("uuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_baf6f8c56720ff78a877db2bbef"`);
        await queryRunner.query(`DROP TABLE "token"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
