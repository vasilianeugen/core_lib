import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDeviceComponentsAddCustomerIdColumn1666246790449 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
