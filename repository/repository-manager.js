export class RepositoryManager {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.entityManager = null;
        this.entityManager = dataSource.manager;
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
