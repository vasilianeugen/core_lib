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
import { Exclude, Expose, Transform } from 'class-transformer';
import { format } from 'date-fns';
import { Device } from './device';
export var Type;
(function (Type) {
    Type["INSTALLATION"] = "installation";
    Type["COMMISSIONING"] = "commissioning";
    Type["DECOMMISSIONING"] = "decommissioning";
    Type["MAINTENANCE"] = "maintenance";
    Type["REPAIR"] = "repair";
    Type["DISMANTLING"] = "dismantling";
    Type["RECYCLING"] = "recycling";
    Type["WARRANTY_GRANTED"] = "warranty_granted";
    Type["WARRANTY_EXPIRED"] = "warranty_expired";
    Type["DEVICE_ADDED"] = "device_added";
    Type["DEVICE_REMOVED"] = "device_removed";
})(Type || (Type = {}));
export const CUSTOMER_AWARE_TYPES = [Type.DEVICE_ADDED, Type.DEVICE_REMOVED];
let DeviceEvent = class DeviceEvent {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], DeviceEvent.prototype, "uuid", void 0);
__decorate([
    Column({ name: 'type', type: 'enum', enum: Type, enumName: 'device_event_types', nullable: false }),
    __metadata("design:type", String)
], DeviceEvent.prototype, "type", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    Expose({ name: 'creation_date' }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd HH:mm:ss') : value, { toPlainOnly: true }),
    __metadata("design:type", Date)
], DeviceEvent.prototype, "createdAt", void 0);
__decorate([
    ManyToOne(() => Device, device => device.deviceEvents, { onDelete: 'CASCADE', nullable: false }),
    JoinColumn({ name: 'device_uuid', referencedColumnName: 'uuid' }),
    Expose({ name: 'device_uuid' }),
    Transform(({ value }) => (value === null || value === void 0 ? void 0 : value.uuid) || value, { toPlainOnly: true }),
    __metadata("design:type", Object)
], DeviceEvent.prototype, "device", void 0);
__decorate([
    Column({ name: 'customer_id', type: 'varchar', length: 50, nullable: true }),
    Exclude(),
    __metadata("design:type", String)
], DeviceEvent.prototype, "customerId", void 0);
DeviceEvent = __decorate([
    Entity({ name: 'device_events' })
], DeviceEvent);
export { DeviceEvent };
