import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class renameDevicesUsersTable1665132216833 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
