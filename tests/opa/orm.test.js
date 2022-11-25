/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-dupe-class-members */
import { test } from 'tap';
import { default as OpaCompileResponseParser } from 'opa-compile-response-parser';
import OrmGenerator from '../../opa';
import { PolicyHandler } from '../test-policy-mapping';
import { AstFactory } from '../factory/ast.factory';
import { SelectQueryBuilder, DataSource } from 'typeorm';
const astPrefix = ['data.device-management'];
class QueryBuilderMock extends SelectQueryBuilder {
    constructor() {
        super(new DataSource({ type: 'postgres' }), {});
        this._joins = [];
        this._where = [];
        this._andWhere = [];
    }
    innerJoin(property) {
        this._joins.push(property);
        return this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    where(where, parameters) {
        this._where.push(where);
        return this;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    andWhere(where, parameters) {
        this._andWhere.push(where);
        return this;
    }
}
test('Test ORM', (t) => {
    let parser;
    t.beforeEach(() => {
        parser = new OpaCompileResponseParser.default();
    });
    t.test('Test: check duplicate removal', (t) => {
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
        const opaConditions = {
            ast: parser.evaluate(),
            metadata: PolicyHandler.getDevices.metadata,
        };
        const builderMock = new QueryBuilderMock();
        OrmGenerator.append(builderMock, opaConditions, astPrefix);
        t.equal(builderMock._joins.length, 1);
        t.same(builderMock._joins, ['devices.deviceCustomers']);
        t.equal(builderMock._where.length, 0);
        t.equal(builderMock._andWhere.length, 2);
        t.same(builderMock._andWhere[0], 'deviceCustomers.customer_id =:param0');
        t.same(builderMock._andWhere[1], 'deviceCustomers.customer_id !=:param1');
        t.end();
    });
    t.end();
});
