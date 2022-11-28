import { DeviceComponentEvent } from '../entity';
export class DeviceComponentEventFactory {
    static createForDeviceComponentByType(deviceComponent, type) {
        const event = new DeviceComponentEvent();
        event.deviceComponent = deviceComponent;
        event.type = type;
        return event;
    }
}
