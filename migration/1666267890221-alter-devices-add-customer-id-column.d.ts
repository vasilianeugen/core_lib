import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDevicesAddCustomerIdColumn1666267890221 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
