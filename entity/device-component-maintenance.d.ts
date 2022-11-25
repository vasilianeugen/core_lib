import { Relation } from 'typeorm';
import { DeviceComponent } from './device-component';
export declare class DeviceComponentMaintenance {
    uuid: string;
    date: Date;
    number?: string;
    signature?: string;
    createdAt: Date;
    creatorUserUuid: string;
    creatorCustomerId?: string;
    deviceComponent: Relation<DeviceComponent>;
}
