import { Relation } from 'typeorm';
import { Device } from './device';
import { DeviceNoteAttachement } from './device-note-attachement';
export declare class DeviceNote {
    uuid?: string;
    title: string;
    text: string;
    isImportant: boolean;
    isRepair: boolean;
    isMaintenance: boolean;
    device?: Relation<Device>;
    attachements: Relation<DeviceNoteAttachement>[];
}
