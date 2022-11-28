import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class alterNotes1660633288297 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
