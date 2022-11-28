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
        const subscribers = dataSourceOptions.subscribers;
        const entitiesLocation = `${Path.join(__dirname, '..', 'entity')}`;
        console.log(`FOLDER ${entitiesLocation}`);
        if (dataSourceOptions.entities) {
            entities = [...Array.isArray(dataSourceOptions.entities) ? dataSourceOptions.entities : Object.values(dataSourceOptions.entities), entitiesLocation];
        }
        else {
            entities = [entitiesLocation];
        }
        this.dataSource = new DataSource(Object.assign(Object.assign({}, dataSourceOptions), { entities, subscribers }));
        this.entityManager = this.dataSource.manager;
    }
    initialize() {
        this.dataSource.initialize();
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
