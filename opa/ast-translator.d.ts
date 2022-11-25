/**
 * From Magda Project:
 * https://github.com/magda-io/magda/blob/master/magda-typescript-common/src/SimpleOpaSQLTranslator.ts
 */
import { CompleteRuleResult } from 'opa-compile-response-parser';
import { OpaMetadata } from '.';
declare class OpaOrmTranslator {
    private refPrefixs;
    private joins;
    private where;
    constructor(unknowns?: string[]);
    parse(result: CompleteRuleResult, metadata: OpaMetadata): {
        joins: any[];
        where: any[];
    };
    private processSimpleExpression;
    private processComplexExpression;
    private processJoins;
}
export default OpaOrmTranslator;
