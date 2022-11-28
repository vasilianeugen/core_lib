var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventSubscriber } from 'typeorm';
import { Device, DeviceEventType } from '../entity';
import { DeviceEventFactory } from '../factory/device-event.factory';
let DeviceSubscriber = class DeviceSubscriber {
    listenTo() {
        return Device;
    }
    afterLoad(device) {
        this.device = device;
    }
    afterUpdate(event) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const device = event.entity;
            const deviceEvents = [];
            if (null === ((_a = this.device) === null || _a === void 0 ? void 0 : _a.installationDate) && null !== device.installationDate) {
                deviceEvents.push(DeviceEventFactory.createForDeviceByType(device, DeviceEventType.INSTALLATION));
            }
            if (null === ((_b = this.device) === null || _b === void 0 ? void 0 : _b.commissioningDate) && null !== event.entity.commissioningDate) {
                deviceEvents.push(DeviceEventFactory.createForDeviceByType(device, DeviceEventType.COMMISSIONING));
            }
            if (deviceEvents.length > 0) {
                yield event.manager.save(deviceEvents);
            }
        });
    }
};
DeviceSubscriber = __decorate([
    EventSubscriber()
], DeviceSubscriber);
export { DeviceSubscriber };
