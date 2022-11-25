var _a;
export class AstFactory {
}
_a = AstFactory;
AstFactory.namespace = [
    {
        type: 'var',
        value: 'data',
    },
    {
        type: 'string',
        value: 'device-management',
    },
];
AstFactory.createEqRef = () => ({
    type: 'ref',
    value: [
        {
            type: 'var',
            value: 'eq',
        },
    ],
});
AstFactory.createNeqRef = () => ({
    type: 'ref',
    value: [
        {
            type: 'var',
            value: 'neq',
        },
    ],
});
AstFactory.createSimpleConditions = (conditions) => ({
    result: {
        queries: [
            conditions.map((condition, index) => ({
                terms: [
                    condition.ref,
                    {
                        type: 'string',
                        value: condition.value,
                    },
                    {
                        type: 'ref',
                        value: [
                            ..._a.namespace,
                            {
                                type: 'string',
                                value: condition.field,
                            },
                        ],
                    },
                ],
                index,
            })),
        ],
    },
});
AstFactory.createJoins = (joins) => ({
    result: {
        queries: [
            joins.map((join, index) => ({
                terms: [
                    join.ref,
                    {
                        type: 'string',
                        value: join.value,
                    },
                    {
                        type: 'ref',
                        value: [
                            ..._a.namespace,
                            {
                                type: 'string',
                                value: join.joinTable,
                            },
                            {
                                type: 'string',
                                value: join.field,
                            },
                        ],
                    }
                ],
                index,
            })),
        ],
    },
});
AstFactory.createEmpty = () => ({ result: {} });
