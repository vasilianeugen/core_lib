import { OpaConditions } from '../opa';
import { DeviceCustomer } from '../entity/device-customer';
export declare const DeviceCustomerRepositoryExtension: import("typeorm").Repository<DeviceCustomer> & {
    findOneByDeviceAndOpaConditions(deviceUuid: string, opaConditions: OpaConditions): Promise<DeviceCustomer>;
};
