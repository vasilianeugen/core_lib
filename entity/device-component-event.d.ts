import { Relation } from 'typeorm';
import { DeviceComponent } from './device-component';
export declare enum Type {
    DEVICE_COMPONENT_ADDED = "device_component_added",
    DEVICE_COMPONENT_REMOVED = "device_component_removed",
    DEVICE_COMPONENT_MAINTENANCE_REGISTRED = "device_component_maintenance_registred"
}
export declare class DeviceComponentEvent {
    uuid: string;
    type: Type;
    createdAt: Date;
    deviceComponent: Relation<DeviceComponent>;
}
