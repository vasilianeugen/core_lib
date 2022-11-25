var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Device } from './device';
let DeviceAssignment = class DeviceAssignment {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], DeviceAssignment.prototype, "uuid", void 0);
__decorate([
    ManyToOne(() => Device, device => device.deviceAssignments, { onDelete: 'CASCADE', nullable: false }),
    JoinColumn({ name: 'device_uuid', referencedColumnName: 'uuid' }),
    __metadata("design:type", Object)
], DeviceAssignment.prototype, "device", void 0);
__decorate([
    Column({ name: 'user_uuid', type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], DeviceAssignment.prototype, "userUuid", void 0);
__decorate([
    Column({ name: 'customer_id', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], DeviceAssignment.prototype, "customerId", void 0);
DeviceAssignment = __decorate([
    Entity({ name: 'devices_assignments' })
], DeviceAssignment);
export { DeviceAssignment };
