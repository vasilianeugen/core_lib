import { ObjectLiteral } from 'typeorm';
import { OpaConditions } from '../opa';
import { Device } from '../entity/device';
import { Pagination } from '../types/pagination.type';
import { Sorting } from '../types/sorting.type';
import { DevicesStatistics } from '../types/statistic/devices.statistics.type';
export declare const DeviceRepositoryExtension: import("typeorm").Repository<Device> & {
    findQb(filters: ObjectLiteral, opaConditions: OpaConditions, userType: string): any;
    findWithFilters(pagination: Pagination, sorting: Sorting[], filters: ObjectLiteral, opaConditions: OpaConditions, userType: string): Promise<Device[]>;
    countWithFilters(filters: any, opaConditions: OpaConditions, userType: string): Promise<number>;
    findOneByUuidAndOpaConditions(uuid: string, opaConditions: OpaConditions, userType: string): Promise<Device>;
    getStatisticsByOpaConditions(opaConditions: OpaConditions): Promise<DevicesStatistics>;
};
