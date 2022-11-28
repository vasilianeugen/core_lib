import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDeviceUsersAddCustomerIdColumn1662705917415 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
