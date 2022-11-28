import { DeviceComponent } from '../entity';
import { DeviceComponentEvent, DeviceComponentEventType } from '../entity';
export declare class DeviceComponentEventFactory {
    static createForDeviceComponentByType(deviceComponent: DeviceComponent, type: DeviceComponentEventType): DeviceComponentEvent;
}
