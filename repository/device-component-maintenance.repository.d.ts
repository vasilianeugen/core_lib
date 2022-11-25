import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { OpaConditions } from '../opa';
import { DeviceComponentMaintenance } from '../entity/device-component-maintenance';
import { Pagination } from '../types/pagination.type';
export declare const DeviceComponentMaintenanceRepositoryExtension: import("typeorm").Repository<DeviceComponentMaintenance> & {
    createWithFiltersQueryBuilder(filters: ObjectLiteral, opaConditions: OpaConditions): SelectQueryBuilder<DeviceComponentMaintenance>;
    findWithFilters(pagination: Pagination, filters: ObjectLiteral, opaConditions: OpaConditions): Promise<DeviceComponentMaintenance[]>;
    countWithFilters(filters: ObjectLiteral, opaConditions: OpaConditions): Promise<number>;
};
