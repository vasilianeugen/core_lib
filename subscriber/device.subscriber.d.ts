import { EntitySubscriberInterface, UpdateEvent } from 'typeorm';
import { Device } from '../entity';
export declare class DeviceSubscriber implements EntitySubscriberInterface<Device> {
    private device;
    listenTo(): any;
    afterLoad(device: Device): void;
    afterUpdate(event: UpdateEvent<Device>): Promise<Device | void>;
}
