import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDevicesAndDeviceComponentsTablesAddIsMaintenanceFlag1667899620951 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
