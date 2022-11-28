var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class alterDevicesAssignmentsTableChangeForeignKey1665478336689 {
    constructor() {
        this.name = 'alterDevicesAssignmentsTableChangeForeignKey1665478336689';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices_assignments" DROP CONSTRAINT "FK_e80ce021706b437610bbde12704"`);
            yield queryRunner.query(`ALTER TABLE "devices_assignments" ADD CONSTRAINT "FK_b5ecbc6d046cfc4cca2c4fb49ae" FOREIGN KEY ("device_uuid") REFERENCES "devices"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices_assignments" DROP CONSTRAINT "FK_b5ecbc6d046cfc4cca2c4fb49ae"`);
            yield queryRunner.query(`ALTER TABLE "devices_assignments" ADD CONSTRAINT "FK_e80ce021706b437610bbde12704" FOREIGN KEY ("device_uuid") REFERENCES "devices"("uuid") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
}
