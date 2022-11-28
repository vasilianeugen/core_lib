var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class deviceCustomerUser1658217202801 {
    constructor() {
        this.name = 'deviceCustomerUser1658217202801';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "devices_customers" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "customer_uuid" uuid NOT NULL, "name" character varying(255), "device_uuid" uuid NOT NULL, CONSTRAINT "PK_bbb685ab62f88c5d19878b37d94" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`CREATE TABLE "devices_users" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_uuid" uuid NOT NULL, "device_uuid" uuid NOT NULL, CONSTRAINT "PK_0643ef46bda8b815ef7f049d4a7" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "devices_customers" ADD CONSTRAINT "FK_f04bf79658a82cd5135f2a66f36" FOREIGN KEY ("device_uuid") REFERENCES "devices"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "devices_users" ADD CONSTRAINT "FK_e80ce021706b437610bbde12704" FOREIGN KEY ("device_uuid") REFERENCES "devices"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices_users" DROP CONSTRAINT "FK_e80ce021706b437610bbde12704"`);
            yield queryRunner.query(`ALTER TABLE "devices_customers" DROP CONSTRAINT "FK_f04bf79658a82cd5135f2a66f36"`);
            yield queryRunner.query(`ALTER TABLE "devices" ADD "name" character varying(255)`);
            yield queryRunner.query(`DROP TABLE "devices_users"`);
            yield queryRunner.query(`DROP TABLE "devices_customers"`);
        });
    }
}
