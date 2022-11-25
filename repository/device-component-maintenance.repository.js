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
import { DeviceComponentMaintenance } from '../entity/device-component-maintenance';
export const DeviceComponentMaintenanceRepositoryExtension = RepositoryManager.extend(DeviceComponentMaintenance, {
    createWithFiltersQueryBuilder(filters, opaConditions) {
        const { component_uuid: componentUuid, date_from: dateFrom, date_to: dateTo, creation_date_from: creationDateFrom, creation_date_to: creationDateTo, } = filters;
        const qb = this.createQueryBuilder('deviceComponentMaintenances')
            .innerJoinAndSelect('deviceComponentMaintenances.deviceComponent', 'deviceComponents')
            .innerJoin('deviceComponents.device', 'devices');
        OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
        if (componentUuid) {
            qb.andWhere('deviceComponents.uuid = :componentUuid', { componentUuid });
        }
        if (dateFrom && dateTo) {
            qb
                .andWhere('deviceComponentMaintenances.date >= :dateFrom', { dateFrom })
                .andWhere('deviceComponentMaintenances.date <= :dateTo', { dateTo });
        }
        if (creationDateFrom && creationDateTo) {
            qb
                .andWhere('deviceComponentMaintenances.createdAt >= :creationDateFrom', { creationDateFrom })
                .andWhere('deviceComponentMaintenances.createdAt <= :creationDateTo', { creationDateTo });
        }
        return qb;
    },
    findWithFilters(pagination, filters, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createWithFiltersQueryBuilder(filters, opaConditions);
            return yield qb
                .take(pagination.limit)
                .skip(pagination.offset)
                .getMany();
        });
    },
    countWithFilters(filters, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createWithFiltersQueryBuilder(filters, opaConditions);
            return yield qb.getCount();
        });
    },
});
