import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDeviceComponentsTableAddIsFailureFlag1667555876338 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
