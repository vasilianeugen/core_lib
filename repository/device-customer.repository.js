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
import { RepositoryManager } from './repository-manager';
import { DeviceCustomer } from '../entity/device-customer';
export const DeviceCustomerRepositoryExtension = RepositoryManager.extend(DeviceCustomer, {
    findOneByDeviceAndOpaConditions(deviceUuid, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('dc')
                .innerJoin('dc.device', 'd')
                .where('d.uuid = :deviceUuid', { deviceUuid });
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            return qb.take(1).getOne();
        });
    },
});
