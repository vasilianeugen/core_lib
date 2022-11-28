var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class alterDeviceCustomersAddIotPermissionGranted1668432443250 {
    constructor() {
        this.name = 'alterDeviceCustomersAddIotPermissionGranted1668432443250';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices_customers" ADD "is_iot_permission_granted" boolean NOT NULL DEFAULT false`);
            yield queryRunner.query(`UPDATE "devices_customers" SET "is_iot_permission_granted" = true`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices_customers" DROP COLUMN "is_iot_permission_granted"`);
        });
    }
}
