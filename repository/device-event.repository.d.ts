import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';
import { OpaConditions } from '../opa';
import { DeviceEvent } from '../entity/device-event';
import { Pagination } from '../types/pagination.type';
import { Sorting } from '../types/sorting.type';
export declare const DeviceEventRepositoryExtension: import("typeorm").Repository<DeviceEvent> & {
    createFilteredByCustomerIdQueryBuilder(customerId: string, filters: ObjectLiteral, opaConditions: OpaConditions): SelectQueryBuilder<DeviceEvent>;
    findFilteredByCustomerId(customerId: string, pagination: Pagination, sorting: Sorting[], filters: ObjectLiteral, opaConditions: OpaConditions): Promise<DeviceEvent[]>;
    countFilteredByCustomerId(customerId: string, filters: ObjectLiteral, opaConditions: OpaConditions): Promise<number>;
};
