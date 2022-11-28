import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDevicesTableChangeStatusNotNullable1666270650800 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
