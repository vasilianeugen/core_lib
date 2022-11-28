var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class alterDevicesTableAddIsFailureFlag1667468604189 {
    constructor() {
        this.name = 'alterDevicesTableAddIsFailureFlag1667468604189';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "devices" ADD "is_failure" boolean NOT NULL DEFAULT false`);
            yield queryRunner.query(`UPDATE devices SET is_failure = true, status = 'UNKNOWN' WHERE status = 'FAILURE'`);
            yield queryRunner.query(`ALTER TYPE "public"."devices_status_enum" RENAME TO "devices_status_enum_old"`);
            yield queryRunner.query(`CREATE TYPE "public"."devices_status_enum" AS ENUM('UNKNOWN', 'ONLINE', 'OFFLINE', 'MAINTENANCE', 'ARCHIVED')`);
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" TYPE "public"."devices_status_enum" USING "status"::"text"::"public"."devices_status_enum"`);
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" SET DEFAULT 'UNKNOWN'`);
            yield queryRunner.query(`DROP TYPE "public"."devices_status_enum_old"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."devices_status_enum_old" AS ENUM('UNKNOWN', 'ONLINE', 'FAILURE', 'OFFLINE', 'MAINTENANCE', 'ARCHIVED')`);
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" TYPE "public"."devices_status_enum_old" USING "status"::"text"::"public"."devices_status_enum_old"`);
            yield queryRunner.query(`ALTER TABLE "devices" ALTER COLUMN "status" SET DEFAULT 'UNKNOWN'`);
            yield queryRunner.query(`DROP TYPE "public"."devices_status_enum"`);
            yield queryRunner.query(`ALTER TYPE "public"."devices_status_enum_old" RENAME TO "devices_status_enum"`);
            yield queryRunner.query(`UPDATE devices SET status = 'FAILURE' WHERE is_failure = true`);
            yield queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "is_failure"`);
        });
    }
}
