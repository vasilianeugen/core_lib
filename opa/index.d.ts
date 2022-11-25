import { CompleteRuleResult } from 'opa-compile-response-parser';
import { SelectQueryBuilder } from 'typeorm';
export declare enum SqlClause {
    INNER_JOIN = "innerJoin"
}
export interface OpaTableMetadata {
    table: string;
    withTable: string;
    clause: SqlClause;
}
export interface OpaPolicy {
    policyName: string;
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    unknowns: string[];
    metadata?: {
        [tableName: string]: OpaTableMetadata;
    };
}
export interface OpaPolicyHandler {
    [endpoint: string]: OpaPolicy;
}
export interface OpaMetadata {
    [tableName: string]: OpaTableMetadata;
}
export interface OpaConditions {
    ast: CompleteRuleResult;
    metadata: OpaMetadata;
}
export default class OrmGenerator {
    static append<Entity>(queryBuilder: SelectQueryBuilder<Entity>, opaConditions: OpaConditions, astPrefix: string[]): void;
}
