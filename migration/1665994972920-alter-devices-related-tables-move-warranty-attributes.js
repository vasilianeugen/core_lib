var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class alterDevicesRelatedTablesMoveWarrantyAttributes1665994972920 {
    constructor() {
        this.name = 'alterDevicesRelatedTablesMoveWarrantyAttributes1665994972920';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_components" ADD "warranty_end_date" TIMESTAMP`);
            yield queryRunner.query(`ALTER TABLE "device_components" ADD "warranty_duration" integer`);
            yield queryRunner.query(`UPDATE device_components SET warranty_end_date = devices.warranty_end_date FROM devices WHERE device_uuid = devices.uuid`);
            yield queryRunner.query(`UPDATE device_components SET warranty_duration = devices.warranty_duration FROM devices WHERE device_uuid = devices.uuid`);
            yield queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "warranty_end_date"`);
            yield queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "warranty_duration"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices" ADD "warranty_duration" integer`);
            yield queryRunner.query(`ALTER TABLE "devices" ADD "warranty_end_date" TIMESTAMP`);
            yield queryRunner.query(`ALTER TABLE "device_components" DROP COLUMN "warranty_duration"`);
            yield queryRunner.query(`ALTER TABLE "device_components" DROP COLUMN "warranty_end_date"`);
        });
    }
}
