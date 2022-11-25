import { ObjectLiteral } from 'typeorm';
import { Pagination } from './pagination.type';
import { Sorting } from './sorting.type';
export type Filters = {
    pagination: Pagination;
    sorting: Sorting[];
    filters: ObjectLiteral;
};
