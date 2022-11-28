var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class deviceComponentEvent1660903971816 {
    constructor() {
        this.name = 'deviceComponentEvent1660903971816';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."device_component_event_types" AS ENUM('device_component_added', 'device_component_removed')`);
            yield queryRunner.query(`CREATE TABLE "device_component_events" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" "public"."device_component_event_types" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "device_component_uuid" uuid NOT NULL, CONSTRAINT "PK_965bb520b94b9d920ca0289df37" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`ALTER TABLE "device_component_events" ADD CONSTRAINT "FK_4716d20f0014fbd2a06491a2606" FOREIGN KEY ("device_component_uuid") REFERENCES "device_components"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_component_events" DROP CONSTRAINT "FK_4716d20f0014fbd2a06491a2606"`);
            yield queryRunner.query(`DROP TABLE "device_component_events"`);
            yield queryRunner.query(`DROP TYPE "public"."device_component_event_types"`);
        });
    }
}
