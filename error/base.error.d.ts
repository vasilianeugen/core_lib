export declare abstract class BaseError extends Error {
    code: any;
    details?: any;
    constructor(message: string, code: any, details?: any);
    abstract mapToHttpStatus(): number;
}
