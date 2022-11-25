import { Relation } from 'typeorm';
import { DeviceNote } from './device-note';
export declare class DeviceNoteAttachement {
    uuid?: string;
    path: string;
    contentType: string;
    contentLength: string;
    deviceNote?: Relation<DeviceNote>;
}
