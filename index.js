export * from './repository';
export * from './entity';
export * from './subscriber';
export * from './factory';
export * from './opa';
export * from './error/base.error';
import pino from 'pino';
export var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "info";
    LogLevel["DEBUG"] = "debug";
})(LogLevel || (LogLevel = {}));
export var LogEventType;
(function (LogEventType) {
    LogEventType["KEY"] = "event";
    LogEventType["INCOMING_REQUEST"] = "incoming_request";
    LogEventType["EXTERNAL_REQUEST"] = "external_request";
    LogEventType["READINESS_FAILURE"] = "readiness_failure";
    LogEventType["MQTT_SUCCESS"] = "mqtt_success";
    LogEventType["INCOMING_MQTT"] = "incoming_mqtt";
    LogEventType["STARTUP_SUCCESS"] = "startup_success";
    LogEventType["STARTUP_FAILURE"] = "startup_failure";
    LogEventType["DATABASE_SUCCESS"] = "database_success";
    LogEventType["DATABASE_FAILURE"] = "database_failure";
    LogEventType["OPA_MIDDLEWARE"] = "opa_middleware";
})(LogEventType || (LogEventType = {}));
export const logger = pino({
    level: process.env.LOG_LEVEL || LogLevel.INFO,
    redact: ['request.headers["opa-result"]'],
});
