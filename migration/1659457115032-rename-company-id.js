var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class migration1659457115032 {
    constructor() {
        this.name = 'migration1659457115032';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('ALTER TABLE "devices_customers" DROP COLUMN "customer_uuid"');
            yield queryRunner.query('ALTER TABLE "devices_customers" ADD "customer_id" character varying(50) NOT NULL');
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('ALTER TABLE "devices_customers" DROP COLUMN "customer_id"');
            yield queryRunner.query('ALTER TABLE "devices_customers" ADD "customer_uuid" uuid NOT NULL');
        });
    }
}
