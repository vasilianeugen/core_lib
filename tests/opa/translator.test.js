import { test } from 'tap';
import { default as OpaCompileResponseParser } from 'opa-compile-response-parser';
import OpaOrmTranslator from '../../opa/ast-translator';
import { PolicyHandler } from '../test-policy-mapping';
import { AstFactory } from '../factory/ast.factory';
const astPrefix = ['data.device-management'];
test('Test translator', (t) => {
    let parser;
    let translator;
    t.beforeEach(() => {
        parser = new OpaCompileResponseParser.default();
        translator = new OpaOrmTranslator(astPrefix);
    });
    t.test('Test: a deputy can see his company devices', (t) => {
        parser.parse(AstFactory.createJoins([
            {
                joinTable: 'deviceCustomers',
                field: 'customer_id',
                value: '41132',
                ref: AstFactory.createEqRef(),
            }
        ]));
        const { joins, where } = translator.parse(parser.evaluate(), PolicyHandler.getDevices.metadata);
        t.equal(joins.length, 1);
        t.same(joins, [{ operand: 'devices.deviceCustomers', value: 'deviceCustomers' }]);
        t.equal(where.length, 1);
        t.same(where, [
            {
                operand: 'deviceCustomers.customer_id =',
                value: '41132',
                negated: false,
            },
        ]);
        t.end();
    });
    t.test('Test: an employee can see only his company devices assigned to him', (t) => {
        parser.parse(AstFactory.createJoins([
            {
                joinTable: 'deviceCustomers',
                field: 'customer_id',
                value: '41132',
                ref: AstFactory.createEqRef(),
            },
            {
                joinTable: 'deviceAssignments',
                field: 'user_uuid',
                value: 'f39e8470-648d-4577-bd7d-5e9bd8dd735a',
                ref: AstFactory.createEqRef(),
            },
        ]));
        const { joins, where } = translator.parse(parser.evaluate(), PolicyHandler.getDevices.metadata);
        t.equal(joins.length, 2);
        t.same(joins, [
            { operand: 'devices.deviceCustomers', value: 'deviceCustomers' },
            { operand: 'devices.deviceAssignments', value: 'deviceAssignments' },
        ]);
        t.equal(where.length, 2);
        t.same(where, [
            {
                operand: 'deviceCustomers.customer_id =',
                value: '41132',
                negated: false,
            },
            {
                operand: 'deviceAssignments.user_uuid =',
                value: 'f39e8470-648d-4577-bd7d-5e9bd8dd735a',
                negated: false,
            },
        ]);
        t.end();
    });
    t.test('Test: rego policy with a comparison and a negation', (t) => {
        parser.parse(AstFactory.createJoins([
            {
                joinTable: 'deviceCustomers',
                field: 'customer_id',
                value: '41132',
                ref: AstFactory.createEqRef(),
            },
            {
                joinTable: 'deviceCustomers',
                field: 'customer_id',
                value: 'test',
                ref: AstFactory.createNeqRef(),
            },
        ]));
        const { joins, where } = translator.parse(parser.evaluate(), PolicyHandler.getDevices.metadata);
        t.equal(joins.length, 2);
        t.same(joins, [
            { operand: 'devices.deviceCustomers', value: 'deviceCustomers' },
            { operand: 'devices.deviceCustomers', value: 'deviceCustomers' },
        ]);
        t.equal(where.length, 2);
        t.same(where, [
            {
                operand: 'deviceCustomers.customer_id =',
                value: '41132',
                negated: false,
            },
            {
                operand: 'deviceCustomers.customer_id !=',
                value: 'test',
                negated: false,
            },
        ]);
        t.end();
    });
    t.test('Test: a deputy can see his company assignments', (t) => {
        parser.parse(AstFactory.createSimpleConditions([
            {
                field: 'customer_id',
                value: '12345',
                ref: AstFactory.createEqRef(),
            }
        ]));
        const { joins, where } = translator.parse(parser.evaluate(), {});
        t.equal(joins.length, 0);
        t.equal(where.length, 1);
        t.same(where, [
            {
                operand: 'customer_id =',
                value: '12345',
                negated: false,
            },
        ]);
        t.end();
    });
    t.end();
});
