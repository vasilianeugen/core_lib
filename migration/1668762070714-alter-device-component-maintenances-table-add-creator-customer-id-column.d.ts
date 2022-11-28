import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDeviceComponentMaintenancesTableAddCreatorCustomerIdColumn1668762070714 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
