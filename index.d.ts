export * from './repository';
export * from './entity';
export * from './subscriber';
export * from './factory';
export * from './opa';
export * from './error/base.error';
export declare enum LogLevel {
    INFO = "info",
    DEBUG = "debug"
}
export declare enum LogEventType {
    KEY = "event",
    INCOMING_REQUEST = "incoming_request",
    EXTERNAL_REQUEST = "external_request",
    READINESS_FAILURE = "readiness_failure",
    MQTT_SUCCESS = "mqtt_success",
    INCOMING_MQTT = "incoming_mqtt",
    STARTUP_SUCCESS = "startup_success",
    STARTUP_FAILURE = "startup_failure",
    DATABASE_SUCCESS = "database_success",
    DATABASE_FAILURE = "database_failure",
    OPA_MIDDLEWARE = "opa_middleware"
}
export declare const logger: import("pino").Logger<{
    level: string;
    redact: string[];
}>;
