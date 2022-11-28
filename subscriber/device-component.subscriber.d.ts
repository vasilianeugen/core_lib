import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { DeviceComponent } from '../entity';
export declare class DeviceComponentSubscriber implements EntitySubscriberInterface<DeviceComponent> {
    private deviceComponent;
    listenTo(): any;
    afterLoad(deviceComponent: DeviceComponent): void;
    afterInsert(event: InsertEvent<DeviceComponent>): Promise<void>;
    afterUpdate(event: UpdateEvent<DeviceComponent>): Promise<void>;
}
