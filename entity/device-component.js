var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Exclude, Expose, Transform } from 'class-transformer';
import { format } from 'date-fns';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Device } from './device';
import { DeviceComponentEvent } from './device-component-event';
import { DeviceComponentMaintenance } from './device-component-maintenance';
export var DeviceComponentStatus;
(function (DeviceComponentStatus) {
    DeviceComponentStatus["ACTIVATED"] = "ACTIVATED";
    DeviceComponentStatus["DEACTIVATED"] = "DEACTIVATED";
    DeviceComponentStatus["ARCHIVED"] = "ARCHIVED";
})(DeviceComponentStatus || (DeviceComponentStatus = {}));
let DeviceComponent = class DeviceComponent {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    Expose({ toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", String)
], DeviceComponent.prototype, "uuid", void 0);
__decorate([
    ManyToOne(() => Device, device => device.deviceComponents, { onDelete: 'CASCADE', nullable: false }),
    JoinColumn({ name: 'device_uuid', referencedColumnName: 'uuid' }),
    Exclude(),
    __metadata("design:type", Object)
], DeviceComponent.prototype, "device", void 0);
__decorate([
    Column({ name: 'serial', type: 'varchar', length: 24, nullable: true }),
    Expose(),
    __metadata("design:type", String)
], DeviceComponent.prototype, "serial", void 0);
__decorate([
    Column({ name: 'type', type: 'varchar', nullable: false }),
    Expose(),
    __metadata("design:type", String)
], DeviceComponent.prototype, "type", void 0);
__decorate([
    Column({ name: 'type_description', type: 'varchar', nullable: true }),
    Expose({ name: 'type_description' }),
    __metadata("design:type", String)
], DeviceComponent.prototype, "typeDescription", void 0);
__decorate([
    Column({ name: 'status', type: 'enum', enum: DeviceComponentStatus, nullable: false, default: DeviceComponentStatus.ACTIVATED }),
    Expose({ toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", String)
], DeviceComponent.prototype, "status", void 0);
__decorate([
    Column({ name: 'is_failure', type: 'boolean', default: false, nullable: false }),
    Expose({ name: 'is_failure', toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", Boolean)
], DeviceComponent.prototype, "isFailure", void 0);
__decorate([
    Column({ name: 'is_maintenance', type: 'boolean', default: false, nullable: false }),
    Expose({ name: 'is_maintenance', toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", Boolean)
], DeviceComponent.prototype, "isMaintenance", void 0);
__decorate([
    Column({ name: 'software_version', type: 'varchar', nullable: true }),
    Expose({ name: 'software_version' }),
    __metadata("design:type", String)
], DeviceComponent.prototype, "softwareVersion", void 0);
__decorate([
    Column({ name: 'installation_date', type: 'timestamp', nullable: true }),
    Expose({ name: 'installation_date' }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd HH:mm:ss') : value, { toPlainOnly: true }),
    Transform(({ value }) => value ? new Date(value) : value, { toClassOnly: true }),
    __metadata("design:type", Date)
], DeviceComponent.prototype, "installationDate", void 0);
__decorate([
    Column({ name: 'warranty_end_date', type: 'timestamp', nullable: true }),
    Expose({ name: 'warranty_end_date', toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd') : value, { toPlainOnly: true }),
    __metadata("design:type", Date)
], DeviceComponent.prototype, "warrantyEndDate", void 0);
__decorate([
    Column({ name: 'warranty_duration', type: 'integer', nullable: true }),
    Expose({ name: 'warranty_duration', toPlainOnly: true }),
    Exclude({ toClassOnly: true }),
    __metadata("design:type", Number)
], DeviceComponent.prototype, "warrantyDuration", void 0);
__decorate([
    Column({ name: 'creator_customer_id', type: 'varchar', length: 50, nullable: true }),
    Exclude(),
    __metadata("design:type", String)
], DeviceComponent.prototype, "creatorCustomerId", void 0);
__decorate([
    Column({ name: 'drivr_uuid', type: 'uuid', nullable: true }),
    Exclude(),
    __metadata("design:type", String)
], DeviceComponent.prototype, "drivrUuid", void 0);
__decorate([
    OneToMany(() => DeviceComponentEvent, deviceComponentEvent => deviceComponentEvent.deviceComponent, { cascade: true }),
    Exclude(),
    __metadata("design:type", Array)
], DeviceComponent.prototype, "deviceComponentEvents", void 0);
__decorate([
    OneToMany(() => DeviceComponentMaintenance, deviceComponentMaintenance => deviceComponentMaintenance.deviceComponent, { cascade: true }),
    Exclude(),
    __metadata("design:type", Object)
], DeviceComponent.prototype, "deviceComponentMaintenances", void 0);
DeviceComponent = __decorate([
    Entity({ name: 'device_components' })
], DeviceComponent);
export { DeviceComponent };
