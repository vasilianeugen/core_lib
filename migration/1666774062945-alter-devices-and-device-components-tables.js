var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class alterDevicesAndDeviceComponentsTables1666774062945 {
    constructor() {
        this.name = 'alterDevicesAndDeviceComponentsTables1666774062945';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "type_description" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "status" SET DEFAULT 'ACTIVATED'`);
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "software_version" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "installation_date" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" SET DEFAULT 'UNKNOWN'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" SET DEFAULT 'OFFLINE'`);
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "installation_date" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "software_version" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "status" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "device_components" ALTER COLUMN "type_description" SET NOT NULL`);
        });
    }
}
