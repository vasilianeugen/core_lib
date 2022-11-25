import { Relation } from 'typeorm';
import { Device } from './device';
import { DeviceComponentEvent } from './device-component-event';
import { DeviceComponentMaintenance } from './device-component-maintenance';
export declare enum DeviceComponentStatus {
    ACTIVATED = "ACTIVATED",
    DEACTIVATED = "DEACTIVATED",
    ARCHIVED = "ARCHIVED"
}
export declare class DeviceComponent {
    uuid?: string;
    device?: Relation<Device>;
    serial?: string;
    type: string;
    typeDescription?: string;
    status: DeviceComponentStatus;
    isFailure: boolean;
    isMaintenance: boolean;
    softwareVersion?: string;
    installationDate?: Date;
    warrantyEndDate?: Date;
    warrantyDuration?: number;
    creatorCustomerId?: string;
    drivrUuid?: string;
    deviceComponentEvents: Relation<DeviceComponentEvent>[];
    deviceComponentMaintenances: Relation<DeviceComponentMaintenance[]>;
}
