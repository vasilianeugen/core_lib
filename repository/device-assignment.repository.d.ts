import { OpaConditions } from '../opa';
import { DeviceAssignment } from '../entity/device-assignment';
export declare const DeviceAssignmentRepositoryExtension: import("typeorm").Repository<DeviceAssignment> & {
    findOneByDeviceAndUser(deviceUuid: string, userUuid: string, opaConditions: OpaConditions): Promise<DeviceAssignment>;
    findUserUuidsByDeviceUuid(deviceUuid: string, opaConditions: OpaConditions): Promise<string[]>;
    findByDeviceAndOpaConditions(deviceUuid: string, opaConditions: OpaConditions): Promise<DeviceAssignment[]>;
};
