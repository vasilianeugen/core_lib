var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class migration1657869934646 {
    constructor() {
        this.name = 'migration1657869934646';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."devices_status_enum" AS ENUM('UNKNOWN', 'ONLINE', 'FAILURE', 'OFFLINE', 'MAINTENANCE', 'ARCHIVED')`);
            yield queryRunner.query(`CREATE TABLE "devices" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "serial" character varying(24) NOT NULL, "type" character varying(20) NOT NULL, "status" "public"."devices_status_enum", "manufacture_date" TIMESTAMP, "installation_date" TIMESTAMP, "commissioning_date" TIMESTAMP, "name" character varying(255), "warranty_end_date" TIMESTAMP, "warranty_duration" integer, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_707b5b8b374103d40974e670d32" PRIMARY KEY ("uuid"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "devices"`);
            yield queryRunner.query(`DROP TYPE "public"."devices_status_enum"`);
        });
    }
}
