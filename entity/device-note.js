var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Exclude, Expose } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Device } from './device';
import { DeviceNoteAttachement } from './device-note-attachement';
let DeviceNote = class DeviceNote {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], DeviceNote.prototype, "uuid", void 0);
__decorate([
    Column({ name: 'title', type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], DeviceNote.prototype, "title", void 0);
__decorate([
    Column({ name: 'text', type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], DeviceNote.prototype, "text", void 0);
__decorate([
    Column({ name: 'is_important', type: 'boolean', default: false, nullable: false }),
    Expose({ name: 'is_important' }),
    __metadata("design:type", Boolean)
], DeviceNote.prototype, "isImportant", void 0);
__decorate([
    Column({ name: 'is_repair', type: 'boolean', default: false, nullable: false }),
    Expose({ name: 'is_repair' }),
    __metadata("design:type", Boolean)
], DeviceNote.prototype, "isRepair", void 0);
__decorate([
    Column({ name: 'is_maintenance', type: 'boolean', default: false, nullable: false }),
    Expose({ name: 'is_maintenance' }),
    __metadata("design:type", Boolean)
], DeviceNote.prototype, "isMaintenance", void 0);
__decorate([
    ManyToOne(() => Device, device => device.deviceCustomers, { onDelete: 'CASCADE', nullable: false }),
    Exclude(),
    JoinColumn({ name: 'device_uuid', referencedColumnName: 'uuid' }),
    __metadata("design:type", Object)
], DeviceNote.prototype, "device", void 0);
__decorate([
    OneToMany(() => DeviceNoteAttachement, deviceNoteAttachment => deviceNoteAttachment.deviceNote, { cascade: true }),
    Exclude(),
    __metadata("design:type", Array)
], DeviceNote.prototype, "attachements", void 0);
DeviceNote = __decorate([
    Entity({ name: 'device_notes' })
], DeviceNote);
export { DeviceNote };
