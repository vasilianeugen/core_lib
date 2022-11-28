var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class deviceEvent1660309508610 {
    constructor() {
        this.name = 'deviceEvent1660309508610';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."device_event_types" AS ENUM('installation', 'commissioning', 'decommissioning', 'maintenance', 'repair', 'dismantling', 'recycling', 'warranty_granted', 'warranty_expired', 'device_added', 'device_removed')`);
            yield queryRunner.query(`CREATE TABLE "device_events" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."device_event_types" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "device_uuid" uuid NOT NULL, CONSTRAINT "PK_9843c03375d5e305d5a3e6c0428" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`ALTER TABLE "device_events" ADD CONSTRAINT "FK_179b584e3c0143e4ae067b942e4" FOREIGN KEY ("device_uuid") REFERENCES "devices"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_events" DROP CONSTRAINT "FK_179b584e3c0143e4ae067b942e4"`);
            yield queryRunner.query(`DROP TABLE "device_events"`);
            yield queryRunner.query(`DROP TYPE "public"."device_event_types"`);
        });
    }
}
