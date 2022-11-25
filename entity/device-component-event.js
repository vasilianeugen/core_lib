var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Expose, Transform } from 'class-transformer';
import { format } from 'date-fns';
import { DeviceComponent } from './device-component';
export var Type;
(function (Type) {
    Type["DEVICE_COMPONENT_ADDED"] = "device_component_added";
    Type["DEVICE_COMPONENT_REMOVED"] = "device_component_removed";
    Type["DEVICE_COMPONENT_MAINTENANCE_REGISTRED"] = "device_component_maintenance_registred";
})(Type || (Type = {}));
let DeviceComponentEvent = class DeviceComponentEvent {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], DeviceComponentEvent.prototype, "uuid", void 0);
__decorate([
    Column({ name: 'type', type: 'enum', enum: Type, enumName: 'device_component_event_types', nullable: false }),
    __metadata("design:type", String)
], DeviceComponentEvent.prototype, "type", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    Expose({ name: 'creation_date' }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd HH:mm:ss') : value, { toPlainOnly: true }),
    __metadata("design:type", Date)
], DeviceComponentEvent.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => DeviceComponent, deviceComponent => deviceComponent.deviceComponentEvents, { onDelete: 'CASCADE', nullable: false }),
    JoinColumn({ name: 'device_component_uuid', referencedColumnName: 'uuid' }),
    Expose({ name: 'device_component_uuid' }),
    Transform(({ value }) => (value === null || value === void 0 ? void 0 : value.uuid) || value, { toPlainOnly: true }),
    __metadata("design:type", Object)
], DeviceComponentEvent.prototype, "deviceComponent", void 0);
DeviceComponentEvent = __decorate([
    Entity({ name: 'device_component_events' })
], DeviceComponentEvent);
export { DeviceComponentEvent };
