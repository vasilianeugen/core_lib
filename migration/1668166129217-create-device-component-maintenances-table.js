var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class createDeviceComponentMaintenancesTable1668166129217 {
    constructor() {
        this.name = 'createDeviceComponentMaintenancesTable1668166129217';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "device_component_maintenances" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" TIMESTAMP NOT NULL, "number" character varying, "signature" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "creator_user_uuid" uuid NOT NULL, "device_component_uuid" uuid NOT NULL, CONSTRAINT "PK_3e8732f0783af63aa858a6444ee" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`ALTER TABLE "device_component_maintenances" ADD CONSTRAINT "FK_0e4fdcfaa399ae31403c7d0d71f" FOREIGN KEY ("device_component_uuid") REFERENCES "device_components"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TYPE "public"."device_component_event_types" RENAME TO "device_component_event_types_old"`);
            yield queryRunner.query(`CREATE TYPE "public"."device_component_event_types" AS ENUM('device_component_added', 'device_component_removed', 'device_component_maintenance_registred')`);
            yield queryRunner.query(`ALTER TABLE "device_component_events" ALTER COLUMN "type" TYPE "public"."device_component_event_types" USING "type"::"text"::"public"."device_component_event_types"`);
            yield queryRunner.query(`DROP TYPE "public"."device_component_event_types_old"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_component_maintenances" DROP CONSTRAINT "FK_0e4fdcfaa399ae31403c7d0d71f"`);
            yield queryRunner.query(`DROP TABLE "device_component_maintenances"`);
            yield queryRunner.query(`CREATE TYPE "public"."device_component_event_types_old" AS ENUM('device_component_added', 'device_component_removed')`);
            yield queryRunner.query(`ALTER TABLE "device_component_events" ALTER COLUMN "type" TYPE "public"."device_component_event_types_old" USING "type"::"text"::"public"."device_component_event_types_old"`);
            yield queryRunner.query(`DROP TYPE "public"."device_component_event_types"`);
            yield queryRunner.query(`ALTER TYPE "public"."device_component_event_types_old" RENAME TO "device_component_event_types"`);
        });
    }
}
