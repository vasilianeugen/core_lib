var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import OrmGenerator from '../opa';
import { DeviceAssignment } from '../entity/device-assignment';
import { RepositoryManager } from './repository-manager';
export const DeviceAssignmentRepositoryExtension = RepositoryManager.extend(DeviceAssignment, {
    findOneByDeviceAndUser(deviceUuid, userUuid, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('deviceAssignment')
                .innerJoin('deviceAssignment.device', 'd')
                .where('d.uuid = :deviceUuid', { deviceUuid })
                .andWhere('deviceAssignment.userUuid = :userUuid', { userUuid });
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            return qb.take(1).getOne();
        });
    },
    findUserUuidsByDeviceUuid(deviceUuid, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('deviceAssignment')
                .select('deviceAssignment.userUuid AS user')
                .innerJoin('deviceAssignment.device', 'device')
                .where('device.uuid = :deviceUuid', { deviceUuid });
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            const result = yield qb.getRawMany();
            return result.map((item) => item.user);
        });
    },
    findByDeviceAndOpaConditions(deviceUuid, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('deviceAssignment')
                .innerJoin('deviceAssignment.device', 'd')
                .where('d.uuid = :deviceUuid', { deviceUuid });
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            return qb.getMany();
        });
    },
});
