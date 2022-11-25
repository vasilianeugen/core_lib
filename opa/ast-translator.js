/**
 * From Magda Project:
 * https://github.com/magda-io/magda/blob/master/magda-typescript-common/src/SimpleOpaSQLTranslator.ts
 */
import { SqlClause } from '.';
class OpaOrmTranslator {
    constructor(unknowns = []) {
        this.refPrefixs = [];
        this.joins = [];
        this.where = [];
        this.refPrefixs = unknowns.map((s) => s + '.');
    }
    parse(result, metadata) {
        var _a;
        if (result === null) {
            // --- no matched rules
            this.where.push({
                operand: '',
                value: 'false',
            });
            return { joins: this.joins, where: this.where };
        }
        if (!((_a = result.residualRules) === null || _a === void 0 ? void 0 : _a.length)) {
            throw new Error('residualRules cannot be empty array!');
        }
        if (result.isCompleteEvaluated) {
            this.where.push({
                operand: '',
                value: result.value === false ? 'false' : 'true',
            });
            return;
        }
        result.residualRules.map((rule) => rule.expressions.map((expression) => {
            switch (expression.terms.length) {
                case 1:
                    this.processSimpleExpression(expression);
                    break;
                case 3:
                    this.processComplexExpression(expression, metadata);
                    break;
                default:
                    throw new Error(`Invalid 3 terms expression: ${expression.termsAsString()}`);
            }
        }));
        return { joins: this.joins, where: this.where };
    }
    processSimpleExpression(expression) {
        const term = expression.terms[0];
        if (term.isRef()) {
            this.where.push({
                operand: `${term.fullRefString(this.refPrefixs)} ${expression.isNegated ? '!=' : '='}`,
                value: 'true',
            });
            return;
        }
        const value = term.getValue();
        // Convert any value to boolean before generate sql
        this.where.push({
            operand: '',
            // eslint-disable-next-line no-extra-boolean-cast
            value: !!value ? 'true' : 'false',
        });
    }
    processComplexExpression(expression, metadata) {
        const [operator, operands] = expression.toOperatorOperandsArray();
        const identifiers = operands.map((operand) => operand.isRef() ? operand.fullRefString(this.refPrefixs) : operand.getValue());
        if (identifiers.length > 2) {
            throw new Error('Unhandled number of identifiers');
        }
        // @TODO: Handle reversed identifiers?
        const operand = identifiers[1].toString();
        const joinParts = operand.split('.');
        if (joinParts.length > 1) {
            this.processJoins(joinParts, metadata);
        }
        this.where.push({
            operand: `${operand} ${operator}`,
            value: identifiers[0],
            negated: expression.isNegated,
        });
    }
    processJoins(joinParts, metadata) {
        const joinMetadata = metadata[joinParts[0]];
        if (!joinMetadata) {
            throw new Error(`Metadata configuration missing for ${joinParts[0]}`);
        }
        if (joinMetadata.clause !== SqlClause.INNER_JOIN) {
            throw new Error(`Clause not supported ${joinMetadata.clause}`);
        }
        this.joins.push({
            operand: `${joinMetadata.table}.${joinMetadata.withTable}`,
            value: `${joinMetadata.withTable}`,
        });
    }
}
export default OpaOrmTranslator;
