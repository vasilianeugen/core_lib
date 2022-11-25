import { Relation } from 'typeorm';
import { Device } from './device';
export declare class DeviceCustomer {
    uuid?: string;
    device?: Relation<Device>;
    customerId: string;
    name?: string;
    isIotPermissionGranted: boolean;
}
