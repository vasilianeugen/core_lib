import { DeviceCustomer } from './device-customer';
import { DeviceAssignment } from './device-assignment';
import { DeviceComponent } from './device-component';
import { DeviceNote } from './device-note';
import { DeviceEvent } from './device-event';
export declare enum DeviceStatus {
    UNKNOWN = "UNKNOWN",
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE",
    ARCHIVED = "ARCHIVED"
}
export declare class Device {
    uuid: string;
    serial: string;
    type: string;
    status: DeviceStatus;
    isFailure: boolean;
    isMaintenance: boolean;
    manufactureDate?: Date;
    installationDate?: Date;
    commissioningDate?: Date;
    creatorCustomerId?: string;
    drivrUuid?: string;
    createdAt: Date;
    updatedAt: Date;
    deviceCustomers: DeviceCustomer[];
    deviceAssignments: DeviceAssignment[];
    deviceComponents: DeviceComponent[];
    deviceNotes: DeviceNote[];
    deviceEvents: DeviceEvent[];
}
