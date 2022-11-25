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
import { Device, DeviceStatus } from '../entity/device';
export const DeviceRepositoryExtension = RepositoryManager.extend(Device, {
    findQb(filters, opaConditions, userType) {
        const { serial, type, status, is_maintenance: isMaintenance, is_failure: isFailure, manufacture_date_from: manufactureDateFrom, manufacture_date_to: manufactureDateTo, installation_date_from: installationDateFrom, installation_date_to: installationDateTo, commissioning_date_from: commissioningDateFrom, commissioning_date_to: commissioningDateTo, } = filters;
        const qb = this.createQueryBuilder('devices');
        OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
        if (serial) {
            qb.andWhere('devices.serial = :serial', { serial });
        }
        if (type) {
            qb.andWhere('devices.type = :type', { type });
        }
        if (status) {
            qb.andWhere('devices.status IN (:...status)', { status });
        }
        if (undefined !== isMaintenance) {
            qb.andWhere('devices.isMaintenance = :isMaintenance', { isMaintenance });
        }
        if (undefined !== isFailure) {
            qb.andWhere('devices.isFailure = :isFailure', { isFailure });
        }
        if (manufactureDateFrom && manufactureDateTo) {
            qb
                .andWhere('devices.manufactureDate >= :manufactureDateFrom', { manufactureDateFrom })
                .andWhere('devices.manufactureDate <= :manufactureDateTo', { manufactureDateTo });
        }
        if (installationDateFrom && installationDateTo) {
            qb
                .andWhere('devices.installationDate >= :installationDateFrom', { installationDateFrom })
                .andWhere('devices.installationDate <= :installationDateTo', { installationDateTo });
        }
        if (commissioningDateFrom && commissioningDateTo) {
            qb
                .andWhere('devices.commissioningDate >= :commissioningDateFrom', { commissioningDateFrom })
                .andWhere('devices.commissioningDate <= :commissioningDateTo', { commissioningDateTo });
        }
        if (userType !== 'int') {
            qb.andWhere('deviceCustomers.isIotPermissionGranted = true');
        }
        return qb;
    },
    findWithFilters(pagination, sorting, filters, opaConditions, userType) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.findQb(filters, opaConditions, userType);
            if (sorting.length > 0) {
                sorting.forEach((sort) => {
                    qb.addOrderBy(`devices.${camelCase(sort.sortBy)}`, sort.sortOrder);
                });
            }
            return qb
                .addSelect('deviceCustomers')
                .take(pagination.limit)
                .skip(pagination.offset)
                .getMany();
        });
    },
    countWithFilters(filters, opaConditions, userType) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.findQb(filters, opaConditions, userType);
            return qb.getCount();
        });
    },
    findOneByUuidAndOpaConditions(uuid, opaConditions, userType) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('devices')
                .where('devices.uuid = :uuid', { uuid });
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            if (userType !== 'int') {
                qb.andWhere('deviceCustomers.isIotPermissionGranted = true');
            }
            return qb
                .addSelect('deviceCustomers')
                .take(1)
                .getOne();
        });
    },
    getStatisticsByOpaConditions(opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('devices');
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            qb
                .select('COUNT(DISTINCT devices.uuid) AS total')
                .addSelect('COUNT(DISTINCT devices.uuid) FILTER (WHERE devices.isMaintenance = true) AS maintenance')
                .addSelect('COUNT(DISTINCT devices.uuid) FILTER (WHERE devices.isFailure = true) AS failure');
            for (const status in DeviceStatus) {
                qb.addSelect(`COUNT(DISTINCT devices.uuid) FILTER (WHERE devices.status = '${status}') AS ${status.toLowerCase()}`);
            }
            return qb.getRawOne();
        });
    }
});
