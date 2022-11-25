var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Exclude, Expose, Transform } from 'class-transformer';
import { format } from 'date-fns';
import { DeviceCustomer } from './device-customer';
import { DeviceAssignment } from './device-assignment';
import { DeviceComponent } from './device-component';
import { DeviceNote } from './device-note';
import { DeviceEvent } from './device-event';
export var DeviceStatus;
(function (DeviceStatus) {
    DeviceStatus["UNKNOWN"] = "UNKNOWN";
    DeviceStatus["ONLINE"] = "ONLINE";
    DeviceStatus["OFFLINE"] = "OFFLINE";
    DeviceStatus["ARCHIVED"] = "ARCHIVED";
})(DeviceStatus || (DeviceStatus = {}));
let Device = class Device {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    Expose({ toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", String)
], Device.prototype, "uuid", void 0);
__decorate([
    Column({ name: 'serial', type: 'varchar', length: 24, nullable: false }),
    Expose(),
    __metadata("design:type", String)
], Device.prototype, "serial", void 0);
__decorate([
    Column({ name: 'type', type: 'varchar', length: 20, nullable: false }),
    Expose(),
    __metadata("design:type", String)
], Device.prototype, "type", void 0);
__decorate([
    Column({ name: 'status', type: 'enum', enum: DeviceStatus, nullable: false, default: DeviceStatus.UNKNOWN }),
    Expose({ toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", String)
], Device.prototype, "status", void 0);
__decorate([
    Column({ name: 'is_failure', type: 'boolean', default: false, nullable: false }),
    Expose({ name: 'is_failure', toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", Boolean)
], Device.prototype, "isFailure", void 0);
__decorate([
    Column({ name: 'is_maintenance', type: 'boolean', default: false, nullable: false }),
    Expose({ name: 'is_maintenance', toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", Boolean)
], Device.prototype, "isMaintenance", void 0);
__decorate([
    Column({ name: 'manufacture_date', type: 'timestamp', nullable: true }),
    Expose({ name: 'manufacture_date', toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd') : value, { toPlainOnly: true }),
    __metadata("design:type", Date)
], Device.prototype, "manufactureDate", void 0);
__decorate([
    Column({ name: 'installation_date', type: 'timestamp', nullable: true }),
    Expose({ name: 'installation_date' }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd') : value, { toPlainOnly: true }),
    Transform(({ value }) => value ? new Date(value) : value, { toClassOnly: true }),
    __metadata("design:type", Date)
], Device.prototype, "installationDate", void 0);
__decorate([
    Column({ name: 'commissioning_date', type: 'timestamp', nullable: true }),
    Expose({ name: 'commissioning_date' }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd') : value, { toPlainOnly: true }),
    Transform(({ value }) => value ? new Date(value) : value, { toClassOnly: true }),
    __metadata("design:type", Date)
], Device.prototype, "commissioningDate", void 0);
__decorate([
    Column({ name: 'creator_customer_id', type: 'varchar', length: 50, nullable: true }),
    Exclude(),
    __metadata("design:type", String)
], Device.prototype, "creatorCustomerId", void 0);
__decorate([
    Column({ name: 'drivr_uuid', type: 'uuid', nullable: true }),
    Exclude(),
    __metadata("design:type", String)
], Device.prototype, "drivrUuid", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    Exclude(),
    __metadata("design:type", Date)
], Device.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ name: 'updated_at' }),
    Exclude(),
    __metadata("design:type", Date)
], Device.prototype, "updatedAt", void 0);
__decorate([
    OneToMany(() => DeviceCustomer, deviceCustomer => deviceCustomer.device, { cascade: true }),
    Exclude(),
    __metadata("design:type", Array)
], Device.prototype, "deviceCustomers", void 0);
__decorate([
    OneToMany(() => DeviceAssignment, deviceAssignment => deviceAssignment.device, { cascade: true }),
    Exclude(),
    __metadata("design:type", Array)
], Device.prototype, "deviceAssignments", void 0);
__decorate([
    OneToMany(() => DeviceComponent, deviceComponent => deviceComponent.device, { cascade: true }),
    Exclude(),
    __metadata("design:type", Array)
], Device.prototype, "deviceComponents", void 0);
__decorate([
    OneToMany(() => DeviceNote, deviceNote => deviceNote.device, { cascade: true }),
    Exclude(),
    __metadata("design:type", Array)
], Device.prototype, "deviceNotes", void 0);
__decorate([
    OneToMany(() => DeviceEvent, deviceEvent => deviceEvent.device, { cascade: true }),
    Exclude(),
    __metadata("design:type", Array)
], Device.prototype, "deviceEvents", void 0);
Device = __decorate([
    Entity({ name: 'devices' })
], Device);
export { Device };
