import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDevicesAndDeviceComponentsTablesAddDrivrUuidColumn1668509415869 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
