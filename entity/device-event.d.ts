import { Relation } from 'typeorm';
import { Device } from './device';
export declare enum DeviceEventType {
    INSTALLATION = "installation",
    COMMISSIONING = "commissioning",
    DECOMMISSIONING = "decommissioning",
    MAINTENANCE = "maintenance",
    REPAIR = "repair",
    DISMANTLING = "dismantling",
    RECYCLING = "recycling",
    WARRANTY_GRANTED = "warranty_granted",
    WARRANTY_EXPIRED = "warranty_expired",
    DEVICE_ADDED = "device_added",
    DEVICE_REMOVED = "device_removed"
}
export declare const CUSTOMER_AWARE_TYPES: DeviceEventType[];
export declare class DeviceEvent {
    uuid: string;
    type: DeviceEventType;
    createdAt: Date;
    device: Relation<Device>;
    customerId?: string;
}
