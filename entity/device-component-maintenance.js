var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Expose, Transform } from 'class-transformer';
import { format } from 'date-fns';
import { DeviceComponent } from './device-component';
let DeviceComponentMaintenance = class DeviceComponentMaintenance {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    Expose({ toPlainOnly: true }),
    __metadata("design:type", String)
], DeviceComponentMaintenance.prototype, "uuid", void 0);
__decorate([
    Column({ name: 'date', type: 'timestamp', nullable: false }),
    Expose({ toPlainOnly: true }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd') : value, { toPlainOnly: true }),
    __metadata("design:type", Date)
], DeviceComponentMaintenance.prototype, "date", void 0);
__decorate([
    Column({ name: 'number', type: 'varchar', nullable: true }),
    Expose({ toPlainOnly: true }),
    __metadata("design:type", String)
], DeviceComponentMaintenance.prototype, "number", void 0);
__decorate([
    Column({ name: 'signature', type: 'varchar', nullable: true }),
    Expose({ toPlainOnly: true }),
    __metadata("design:type", String)
], DeviceComponentMaintenance.prototype, "signature", void 0);
__decorate([
    CreateDateColumn({ name: 'created_at' }),
    Expose({ name: 'creation_date', toPlainOnly: true }),
    Transform(({ value }) => value ? format(value, 'yyyy-MM-dd HH:mm:ss') : value, { toPlainOnly: true }),
    __metadata("design:type", Date)
], DeviceComponentMaintenance.prototype, "createdAt", void 0);
__decorate([
    Column({ name: 'creator_user_uuid', type: 'uuid', nullable: false }),
    Expose({ name: 'creator_user_uuid', toPlainOnly: true }),
    __metadata("design:type", String)
], DeviceComponentMaintenance.prototype, "creatorUserUuid", void 0);
__decorate([
    Column({ name: 'creator_customer_id', type: 'varchar', length: 50, nullable: true }),
    Expose({ name: 'creator_customer_id', toPlainOnly: true }),
    __metadata("design:type", String)
], DeviceComponentMaintenance.prototype, "creatorCustomerId", void 0);
__decorate([
    ManyToOne(() => DeviceComponent, deviceComponent => deviceComponent.deviceComponentMaintenances, { onDelete: 'CASCADE', nullable: false }),
    JoinColumn({ name: 'device_component_uuid', referencedColumnName: 'uuid' }),
    Expose({ name: 'device_component_uuid', toPlainOnly: true }),
    Transform(({ value }) => (value === null || value === void 0 ? void 0 : value.uuid) || value, { toPlainOnly: true }),
    __metadata("design:type", Object)
], DeviceComponentMaintenance.prototype, "deviceComponent", void 0);
DeviceComponentMaintenance = __decorate([
    Entity({ name: 'device_component_maintenances' })
], DeviceComponentMaintenance);
export { DeviceComponentMaintenance };
