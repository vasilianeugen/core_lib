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
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { DeviceNote } from './device-note';
let DeviceNoteAttachement = class DeviceNoteAttachement {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], DeviceNoteAttachement.prototype, "uuid", void 0);
__decorate([
    Column({ name: 'path', type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], DeviceNoteAttachement.prototype, "path", void 0);
__decorate([
    Column({ name: 'content_type', type: 'varchar', nullable: false }),
    Expose({ name: 'content_type' }),
    __metadata("design:type", String)
], DeviceNoteAttachement.prototype, "contentType", void 0);
__decorate([
    Column({ name: 'content_length', type: 'varchar', nullable: false }),
    Expose({ name: 'content_length' }),
    __metadata("design:type", String)
], DeviceNoteAttachement.prototype, "contentLength", void 0);
__decorate([
    ManyToOne(() => DeviceNote, deviceNote => deviceNote.attachements, { onDelete: 'CASCADE', nullable: false }),
    JoinColumn({ name: 'device_note_uuid', referencedColumnName: 'uuid' }),
    Exclude(),
    __metadata("design:type", Object)
], DeviceNoteAttachement.prototype, "deviceNote", void 0);
DeviceNoteAttachement = __decorate([
    Entity({ name: 'device_note_attachements' })
], DeviceNoteAttachement);
export { DeviceNoteAttachement };
