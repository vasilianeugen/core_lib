import { DeviceEvent } from '../entity';
export class DeviceEventFactory {
    static createForDeviceByType(device, type) {
        const deviceEvent = new DeviceEvent();
        deviceEvent.device = device;
        deviceEvent.type = type;
        return deviceEvent;
    }
    static createForDeviceAndCustomerByType(device, type, customerId) {
        const deviceEvent = this.createForDeviceByType(device, type);
        deviceEvent.customerId = customerId;
        return deviceEvent;
    }
}
