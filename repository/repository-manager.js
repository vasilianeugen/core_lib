var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DataSource } from 'typeorm';
import Path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
export class RepositoryManager {
    constructor(dataSourceOptions) {
        this.dataSourceOptions = dataSourceOptions;
        this.entityManager = null;
        this.dataSource = null;
        let entities;
        let subscribers;
        const entitiesLocation = `${Path.join(__dirname, '..', 'entity', '**/*.{js,ts}')}`;
        console.log(`Entities folder ${entitiesLocation}`);
        if (dataSourceOptions.entities) {
            entities = [...Array.isArray(dataSourceOptions.entities) ? dataSourceOptions.entities : Object.values(dataSourceOptions.entities), entitiesLocation];
        }
        else {
            entities = [entitiesLocation];
        }
        const subscribersLocation = `${Path.join(__dirname, '..', 'subscriber', '**/*.{js,ts}')}`;
        console.log(`Subscribers folder ${subscribersLocation}`);
        if (dataSourceOptions.entities) {
            subscribers = [...Array.isArray(dataSourceOptions.subscribers) ? dataSourceOptions.subscribers : Object.values(dataSourceOptions.subscribers), subscribersLocation];
        }
        else {
            subscribers = [subscribersLocation];
        }
        this.dataSource = new DataSource(Object.assign(Object.assign({}, dataSourceOptions), { entities, subscribers }));
        this.entityManager = this.dataSource.manager;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.dataSource.initialize();
        });
    }
    isInitialized() {
        return this.dataSource.isInitialized;
    }
    static extend(entity, custom) {
        this.customRepositoryMap.set(entity.name, custom);
        return custom;
    }
    // eslint-disable-next-line no-dupe-class-members
    getRepository(entity, initRepositoryExtension = true) {
        if (!RepositoryManager.baseRepositoryMap.has(entity.name)) {
            const newRepository = this.dataSource.getRepository(entity);
            if (initRepositoryExtension && RepositoryManager.customRepositoryMap.has(entity.name)) {
                RepositoryManager.baseRepositoryMap.set(entity.name, newRepository.extend(RepositoryManager.customRepositoryMap.get(entity.name)));
            }
            else {
                RepositoryManager.baseRepositoryMap.set(entity.name, newRepository);
            }
        }
        return RepositoryManager.baseRepositoryMap.get(entity.name);
    }
}
RepositoryManager.baseRepositoryMap = new Map();
RepositoryManager.customRepositoryMap = new Map();
