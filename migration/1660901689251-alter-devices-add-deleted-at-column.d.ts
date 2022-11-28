import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDevicesAddDeletedAtColumn1660901689251 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
