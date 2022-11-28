export class BaseError extends Error {
    constructor(message, code, details) {
        super(message);
        this.code = code;
        this.details = details;
        Object.setPrototypeOf(this, BaseError.prototype);
        Error.captureStackTrace(this);
    }
}
