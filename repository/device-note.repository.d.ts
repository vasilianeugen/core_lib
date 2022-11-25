import { ObjectLiteral } from 'typeorm';
import { OpaConditions } from '../opa';
import { Device } from '../entity/device';
import { DeviceNote } from '../entity/device-note';
import { Pagination } from '../types/pagination.type';
import { Sorting } from '../types/sorting.type';
export declare const DeviceNoteRepositoryExtension: import("typeorm").Repository<DeviceNote> & {
    findQb(deviceUuid: string, filters: ObjectLiteral, opaConditions: OpaConditions): any;
    findWithFilters(deviceUuid: string, pagination: Pagination, sorting: Sorting[], filters: ObjectLiteral, opaConditions: OpaConditions): Promise<DeviceNote[]>;
    countWithFilters(deviceUuid: string, filters: ObjectLiteral, opaConditions: OpaConditions): Promise<number>;
    findOneByUuidAndDeviceAndOpaConditions(uuid: string, device: Device, opaConditions: any): Promise<DeviceNote>;
};
