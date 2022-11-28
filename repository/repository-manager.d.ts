import { DataSource, EntityManager, MixedList, ObjectLiteral, Repository } from 'typeorm';
import { Device } from '../entity/device';
import { DeviceAssignment } from '../entity/device-assignment';
import { DeviceComponent } from '../entity/device-component';
import { DeviceCustomer } from '../entity/device-customer';
import { DeviceEvent } from '../entity/device-event';
import { DeviceComponentMaintenance } from '../entity/device-component-maintenance';
import { DeviceNote } from '../entity/device-note';
import { DeviceNoteAttachement } from '../entity/device-note-attachement';
import { DeviceRepositoryExtension, DeviceAssignmentRepositoryExtension, DeviceComponentRepositoryExtension, DeviceCustomerRepositoryExtension, DeviceEventRepositoryExtension, DeviceComponentMaintenanceRepositoryExtension, DeviceNoteRepositoryExtension, DeviceNoteAttachementRepositoryExtension } from '.';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
type EntityType<Entity> = new () => Entity;
type ObjectType<Entity> = Entity extends DeviceAssignment ? typeof DeviceAssignmentRepositoryExtension : Entity extends DeviceComponent ? typeof DeviceComponentRepositoryExtension : Entity extends DeviceCustomer ? typeof DeviceCustomerRepositoryExtension : Entity extends DeviceEvent ? typeof DeviceEventRepositoryExtension : Entity extends DeviceComponentMaintenance ? typeof DeviceComponentMaintenanceRepositoryExtension : Entity extends DeviceNoteAttachement ? typeof DeviceNoteAttachementRepositoryExtension : Entity extends DeviceNote ? typeof DeviceNoteRepositoryExtension : Entity extends Device ? typeof DeviceRepositoryExtension : never;
export interface RepositoryDataSourceOptions extends PostgresConnectionOptions {
    readonly entities?: MixedList<string>;
    readonly subscribers?: MixedList<string>;
}
export declare class RepositoryManager {
    protected dataSourceOptions: RepositoryDataSourceOptions;
    entityManager: EntityManager;
    dataSource: DataSource;
    private static baseRepositoryMap;
    private static customRepositoryMap;
    constructor(dataSourceOptions: RepositoryDataSourceOptions);
    initialize(): Promise<void>;
    isInitialized(): boolean;
    static extend<CustomRepository, Entity>(entity: EntityType<Entity>, custom: CustomRepository & ThisType<Repository<Entity> & CustomRepository>): Repository<Entity> & CustomRepository;
    getRepository<Entity extends ObjectLiteral>(entity: EntityType<Entity>, initRepositoryExtension?: true): ObjectType<Entity>;
    getRepository<Entity extends ObjectLiteral>(entity: EntityType<Entity>, initRepositoryExtension: false): Repository<Entity>;
}
export {};
