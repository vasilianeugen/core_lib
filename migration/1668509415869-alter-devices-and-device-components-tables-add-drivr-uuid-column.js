var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class alterDevicesAndDeviceComponentsTablesAddDrivrUuidColumn1668509415869 {
    constructor() {
        this.name = 'alterDevicesAndDeviceComponentsTablesAddDrivrUuidColumn1668509415869';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_components" ADD "drivr_uuid" uuid`);
            yield queryRunner.query(`ALTER TABLE "devices" ADD "drivr_uuid" uuid`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "drivr_uuid"`);
            yield queryRunner.query(`ALTER TABLE "device_components" DROP COLUMN "drivr_uuid"`);
        });
    }
}
