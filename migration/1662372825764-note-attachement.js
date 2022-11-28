var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class noteAttachement1662372825764 {
    constructor() {
        this.name = 'noteAttachement1662372825764';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "device_note_attachements" ("uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, "content_type" character varying NOT NULL, "content_length" character varying NOT NULL, "device_note_uuid" uuid NOT NULL, CONSTRAINT "PK_b6a34ff07349140a07b2bf1a14e" PRIMARY KEY ("uuid"))`);
            yield queryRunner.query(`ALTER TABLE "device_note_attachements" ADD CONSTRAINT "FK_7c6cfcb37834771dcc7df791689" FOREIGN KEY ("device_note_uuid") REFERENCES "device_notes"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_note_attachements" DROP CONSTRAINT "FK_7c6cfcb37834771dcc7df791689"`);
            yield queryRunner.query(`DROP TABLE "device_note_attachements"`);
        });
    }
}
