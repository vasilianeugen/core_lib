import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterDeviceCustomersAddIotPermissionGranted1668432443250 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
