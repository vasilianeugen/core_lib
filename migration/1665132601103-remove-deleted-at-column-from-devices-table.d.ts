import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class removeDeletedAtColumnFromDevicesTable1665132601103 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
