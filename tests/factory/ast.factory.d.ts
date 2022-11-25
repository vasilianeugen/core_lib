type Value = {
    type: string;
    value: string;
};
type Ref = {
    type: string;
    value: Value[];
};
type Condition = {
    ref: Ref;
    field: string;
    value: string;
};
type Join = {
    ref: Ref;
    joinTable: string;
    field: string;
    value: string;
};
export declare class AstFactory {
    private static namespace;
    static createEqRef: () => Ref;
    static createNeqRef: () => Ref;
    static createSimpleConditions: (conditions: Condition[]) => {
        result: {
            queries: {
                terms: (Ref | {
                    type: string;
                    value: string;
                })[];
                index: number;
            }[][];
        };
    };
    static createJoins: (joins: Join[]) => any;
    static createEmpty: () => any;
}
export {};
