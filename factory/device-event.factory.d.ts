import { Device, DeviceEvent, DeviceEventType } from '../entity';
export declare class DeviceEventFactory {
    static createForDeviceByType(device: Device, type: DeviceEventType): DeviceEvent;
    static createForDeviceAndCustomerByType(device: Device, type: DeviceEventType, customerId: string): DeviceEvent;
}
