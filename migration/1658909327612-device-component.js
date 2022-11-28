var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class deviceComponent1658909327612 {
    constructor() {
        this.name = 'deviceComponent1658909327612';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."device_components_status_enum" AS ENUM('ACTIVATED', 'DEACTIVATED', 'ARCHIVED')`);
            yield queryRunner.query(`CREATE TABLE "device_components" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "serial" character varying(24), "type" character varying NOT NULL, "type_description" character varying NOT NULL, "status" "public"."device_components_status_enum" NOT NULL, "software_version" character varying NOT NULL, "installation_date" TIMESTAMP NOT NULL, "device_uuid" uuid NOT NULL, CONSTRAINT "PK_ad1fe40088600afd887b42fded3" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`ALTER TABLE "device_components" ADD CONSTRAINT "FK_84296355242791b8b1f1547e621" FOREIGN KEY ("device_uuid") REFERENCES "devices"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_components" DROP CONSTRAINT "FK_84296355242791b8b1f1547e621"`);
            yield queryRunner.query(`DROP TABLE "device_components"`);
            yield queryRunner.query(`DROP TYPE "public"."device_components_status_enum"`);
        });
    }
}
