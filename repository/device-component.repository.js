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
import { DeviceComponent } from '../entity/device-component';
export const DeviceComponentRepositoryExtension = RepositoryManager.extend(DeviceComponent, {
    findQb(deviceUuid, filters, opaConditions) {
        const { serial, type, type_description: typeDescription, status, is_maintenance: isMaintenance, is_failure: isFailure, software_version: softwareVersion, installation_date_from: installationDateFrom, installation_date_to: installationDateTo, warranty_end_date_from: warrantyEndDateFrom, warranty_end_date_to: warrantyEndDateTo, warranty_duration: warrantyDuration, } = filters;
        const qb = this.createQueryBuilder('deviceComponents')
            .innerJoin('deviceComponents.device', 'devices')
            .where('devices.uuid = :deviceUuid', { deviceUuid });
        OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
        if (serial) {
            qb.andWhere('deviceComponents.serial = :serial', { serial });
        }
        if (type) {
            qb.andWhere('deviceComponents.type = :type', { type });
        }
        if (typeDescription) {
            qb.andWhere('deviceComponents.typeDescription = :typeDescription', { typeDescription });
        }
        if (status) {
            qb.andWhere('deviceComponents.status IN (:...status)', { status });
        }
        if (undefined !== isMaintenance) {
            qb.andWhere('deviceComponents.isMaintenance = :isMaintenance', { isMaintenance });
        }
        if (undefined !== isFailure) {
            qb.andWhere('deviceComponents.isFailure = :isFailure', { isFailure });
        }
        if (softwareVersion) {
            qb.andWhere('deviceComponents.softwareVersion = :softwareVersion', { softwareVersion });
        }
        if (installationDateFrom && installationDateTo) {
            qb
                .andWhere('deviceComponents.installationDate >= :installationDateFrom', { installationDateFrom })
                .andWhere('deviceComponents.installationDate <= :installationDateTo', { installationDateTo });
        }
        if (warrantyEndDateFrom && warrantyEndDateTo) {
            qb
                .andWhere('deviceComponents.warrantyEndDate >= :warrantyEndDateFrom', { warrantyEndDateFrom })
                .andWhere('deviceComponents.warrantyEndDate <= :warrantyEndDateTo', { warrantyEndDateTo });
        }
        if (warrantyDuration) {
            qb.andWhere('deviceComponents.warrantyDuration = :warrantyDuration', { warrantyDuration });
        }
        return qb;
    },
    findWithFilters(deviceUuid, pagination, sorting, filters, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.findQb(deviceUuid, filters, opaConditions);
            if (sorting.length > 0) {
                sorting.forEach((sort) => {
                    qb.addOrderBy(`dc.${camelCase(sort.sortBy)}`, sort.sortOrder);
                });
            }
            return qb
                .take(pagination.limit)
                .skip(pagination.offset)
                .getMany();
        });
    },
    countWithFilters(deviceUuid, filters, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findQb(deviceUuid, filters, opaConditions).getCount();
        });
    },
    findOneByUuidAndDeviceAndOpaConditions(uuid, device, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('deviceComponents')
                .innerJoin('deviceComponents.device', 'devices')
                .where('deviceComponents.uuid = :uuid', { uuid })
                .andWhere('devices.uuid = :deviceUuid', { deviceUuid: device.uuid });
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            return qb.take(1).getOne();
        });
    },
    findBySerialsAndOpaConditions(serials, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.createQueryBuilder('deviceComponents')
                .innerJoin('deviceComponents.device', 'devices');
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            return qb
                .andWhere('deviceComponents.serial IN (:...serials)', { serials })
                .leftJoinAndSelect('deviceComponents.deviceComponentMaintenances', 'deviceComponentMaintenances')
                .leftJoinAndSelect('deviceComponents.deviceComponentEvents', 'deviceComponentEvents')
                .getMany();
        });
    },
});
