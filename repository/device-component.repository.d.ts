import { ObjectLiteral } from 'typeorm';
import { OpaConditions } from '../opa';
import { Device } from '../entity/device';
import { DeviceComponent } from '../entity/device-component';
import { Pagination } from '../types/pagination.type';
import { Sorting } from '../types/sorting.type';
export declare const DeviceComponentRepositoryExtension: import("typeorm").Repository<DeviceComponent> & {
    findQb(deviceUuid: string, filters: ObjectLiteral, opaConditions: OpaConditions): any;
    findWithFilters(deviceUuid: string, pagination: Pagination, sorting: Sorting[], filters: ObjectLiteral, opaConditions: OpaConditions): Promise<DeviceComponent[]>;
    countWithFilters(deviceUuid: string, filters: ObjectLiteral, opaConditions: OpaConditions): Promise<number>;
    findOneByUuidAndDeviceAndOpaConditions(uuid: string, device: Device, opaConditions: OpaConditions): Promise<DeviceComponent>;
    findBySerialsAndOpaConditions(serials: string[], opaConditions: OpaConditions): Promise<DeviceComponent[]>;
};
