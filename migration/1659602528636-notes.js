var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class notes1659602528636 {
    constructor() {
        this.name = 'notes1659602528636';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "device_notes" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(50) NOT NULL, "text" character varying(255) NOT NULL, "is_important" boolean NOT NULL DEFAULT false, "is_repair" boolean NOT NULL DEFAULT false, "is_maintenance" boolean NOT NULL DEFAULT false, "customer_id" character varying(50) NOT NULL, "device_uuid" uuid NOT NULL, CONSTRAINT "PK_23b718400f886d7184e302d80dd" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`ALTER TABLE "device_notes" ADD CONSTRAINT "FK_76027ba0a8ea10dc31ddb505a45" FOREIGN KEY ("device_uuid") REFERENCES "devices"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_notes" DROP CONSTRAINT "FK_76027ba0a8ea10dc31ddb505a45"`);
            yield queryRunner.query(`DROP TABLE "device_notes"`);
        });
    }
}
