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
import { DeviceNote } from '../entity/device-note';
export const DeviceNoteRepositoryExtension = RepositoryManager.extend(DeviceNote, {
    findQb(deviceUuid, filters, opaConditions) {
        const { title, is_important: isImportant, is_repair: isRepair, is_maintenance: isMaintenance, } = filters;
        const qb = this.createQueryBuilder('deviceNotes')
            .addSelect('attachements')
            .innerJoin('deviceNotes.device', 'devices')
            .leftJoin('deviceNotes.attachements', 'attachements')
            .where('devices.uuid = :deviceUuid', { deviceUuid });
        OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
        if (title) {
            qb.andWhere('deviceNotes.title = :title', { title });
        }
        if (isImportant) {
            qb.andWhere('deviceNotes.isImportant = :isImportant', { isImportant });
        }
        if (isRepair) {
            qb.andWhere('deviceNotes.isRepair = :isRepair', { isRepair });
        }
        if (isRepair) {
            qb.andWhere('deviceNotes.isMaintenance = :isMaintenance', { isMaintenance });
        }
        return qb;
    },
    findWithFilters(deviceUuid, pagination, sorting, filters, opaConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const qb = this.findQb(deviceUuid, filters, opaConditions);
            if (sorting.length > 0) {
                sorting.forEach((sort) => {
                    qb.addOrderBy(`dn.${camelCase(sort.sortBy)}`, sort.sortOrder);
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
            const qb = this.createQueryBuilder('deviceNotes')
                .innerJoin('deviceNotes.device', 'devices')
                .leftJoinAndSelect('deviceNotes.attachements', 'attachements')
                .where('deviceNotes.uuid = :uuid', { uuid })
                .andWhere('devices.uuid = :deviceUuid', { deviceUuid: device.uuid });
            OrmGenerator.append(qb, opaConditions, [process.env.OPA_DATA_NAMESPACE]);
            return qb.take(1).getOne();
        });
    },
});
