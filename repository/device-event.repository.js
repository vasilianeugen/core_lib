var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import camelCase from 'camelcase';
import OrmGenerator from '../opa';
import { RepositoryManager } from './repository-manager';
import { CUSTOMER_AWARE_TYPES, DeviceEvent } from '../entity/device-event';
export const DeviceEventRepositoryExtension = RepositoryManager.extend(DeviceEvent, {
    createFilteredByCustomerIdQueryBuilder(customerId, filters, opaConditions) {
        const { device_uuid: deviceUuid, type: types, creation_date_from: creationDateFrom, creation_date_to: creationDateTo, } = filters;
        const qb = this
            .createQueryBuilder('deviceEvents')
            .addSelect('devices')
            .innerJoin('deviceEvents.device', 'devices');
        OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
        if (deviceUuid) {
            qb.andWhere('devices.uuid = :deviceUuid', { deviceUuid });
        }
        if (types) {
            qb.andWhere('deviceEvents.type IN (:...types)', { types });
        }
        if (creationDateFrom) {
            qb.andWhere('deviceEvents.createdAt >= :creationDateFrom', { creationDateFrom });
        }
        if (creationDateTo) {
            qb.andWhere('deviceEvents.createdAt <= :creationDateTo', { creationDateTo });
        }
        qb.andWhere(`
      CASE
        WHEN deviceEvents.type IN (:...customerAwareTypes) THEN deviceEvents.customerId = :customerId
        ELSE true
      END
    `, {
            customerAwareTypes: CUSTOMER_AWARE_TYPES,
            customerId,
        });
        return qb;
    },
    findFilteredByCustomerId(customerId, pagination, sorting, filters, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createFilteredByCustomerIdQueryBuilder(customerId, filters, opaConditions);
            if (sorting.length > 0) {
                sorting.forEach((sort) => {
                    qb.addOrderBy(`deviceEvents.${camelCase(sort.sortBy)}`, sort.sortOrder);
                });
            }
            return qb
                .take(pagination.limit)
                .skip(pagination.offset)
                .getMany();
        });
    },
    countFilteredByCustomerId(customerId, filters, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createFilteredByCustomerIdQueryBuilder(customerId, filters, opaConditions).getCount();
        });
    },
});
