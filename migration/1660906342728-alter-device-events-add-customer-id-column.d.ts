import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDeviceEventsAddCustomerIdColumn1660906342728 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
