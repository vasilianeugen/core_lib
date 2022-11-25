import OpaOrmTranslator from './ast-translator.js';
export var SqlClause;
(function (SqlClause) {
    SqlClause["INNER_JOIN"] = "innerJoin";
})(SqlClause || (SqlClause = {}));
export default class OrmGenerator {
    static append(queryBuilder, opaConditions, astPrefix) {
        const { ast, metadata } = opaConditions;
        const translator = new OpaOrmTranslator(astPrefix);
        const { joins, where } = translator.parse(ast, metadata);
        const uniqueJoins = joins.filter((value, index, arr) => arr.findIndex((value2) => ['operand', 'value'].every((k) => value2[k] === value[k])) ===
            index);
        uniqueJoins.forEach(({ operand, value }) => queryBuilder.innerJoin(operand, value));
        where.forEach(({ operand, value }, index) => {
            const paramName = `param${index}`;
            queryBuilder.andWhere(operand + `:${paramName}`, { [paramName]: value });
        });
    }
}
