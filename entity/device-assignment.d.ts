import { Relation } from 'typeorm';
import { Device } from './device';
export declare class DeviceAssignment {
    uuid?: string;
    device: Relation<Device>;
    userUuid?: string;
    customerId: string;
}
