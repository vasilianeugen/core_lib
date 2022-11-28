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
        const entities = this.loadDefaultValue('entity', dataSourceOptions.entities, dataSourceOptions.loadDeafultEntities);
        const subscribers = this.loadDefaultValue('subscriber', dataSourceOptions.subscribers, dataSourceOptions.loadDeafultSubscribers);
        const migrations = this.loadDefaultValue('migration', dataSourceOptions.migrations, dataSourceOptions.loadDeafultMigations);
        this.dataSource = new DataSource(Object.assign(Object.assign({}, dataSourceOptions), { entities, subscribers, migrations, migrationsTableName: 'migrations' }));
        this.entityManager = this.dataSource.manager;
    }
    loadDefaultValue(folder, initialValue, loadDeafult) {
        let loadedValue;
        if (typeof loadDeafult === 'undefined' ? true : loadDeafult) {
            const folderLocation = `${Path.join(__dirname, '..', folder, '**/*.{js,ts}')}`;
            console.log(`${folder} folder ${folderLocation}`);
            if (initialValue) {
                loadedValue = [...Array.isArray(initialValue) ? initialValue : Object.values(initialValue), folderLocation];
            }
            else {
                loadedValue = [folderLocation];
            }
        }
        else {
            loadedValue = initialValue;
        }
        return loadedValue;
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
