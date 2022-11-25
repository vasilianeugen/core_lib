import { SqlClause } from '../opa';
export const PolicyHandler = {
    getDevices: {
        policyName: 'devices',
        path: 'devices',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    getDevice: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    updateDevice: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}',
        method: 'PATCH',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    deleteDevice: {
        policyName: 'delete_devices',
        path: 'devices/{deviceUuid}',
        method: 'DELETE',
        unknowns: ['customer_id'],
    },
    getAssignedUsersByDevice: {
        policyName: 'assignments',
        path: 'devices/{deviceUuid}/assignments',
        method: 'GET',
        unknowns: ['customer_id'],
    },
    assignDeviceToUsers: {
        policyName: 'assignments',
        path: 'devices/{deviceUuid}/assignments',
        method: 'POST',
        unknowns: ['customer_id'],
    },
    unassignDeviceFromUser: {
        policyName: 'assignments',
        path: 'devices/{deviceUuid}/assignments/{contactUuid}',
        method: 'DELETE',
        unknowns: ['customer_id'],
    },
    getComponents: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/components',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    addComponent: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/components',
        method: 'POST',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    getComponentByUuidAndDevice: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/components/{componentUuid}',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    updateComponent: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/components/{componentUuid}',
        method: 'PATCH',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    archiveComponent: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/components/{componentUuid}',
        method: 'DELETE',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    getFilteredAndPaginatedEvents: {
        policyName: 'devices',
        path: 'events/me',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    addNote: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/notes',
        method: 'POST',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    getNotes: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/notes',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    deleteNote: {
        policyName: 'devices',
        path: 'devices/{deviceUuid}/notes/{noteUuid}',
        method: 'DELETE',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    getDevicesStatistics: {
        policyName: 'devices',
        path: 'devices',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    getMaintenances: {
        policyName: 'devices',
        path: 'maintenances',
        method: 'GET',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
    addMaintenances: {
        policyName: 'devices',
        path: 'maintenances',
        method: 'POST',
        unknowns: [
            'deviceCustomers.customer_id',
            'deviceAssignments.user_uuid',
            'deviceAssignments.customer_id',
        ],
        metadata: {
            deviceCustomers: {
                table: 'devices',
                withTable: 'deviceCustomers',
                clause: SqlClause.INNER_JOIN,
            },
            deviceAssignments: {
                table: 'devices',
                withTable: 'deviceAssignments',
                clause: SqlClause.INNER_JOIN,
            },
        },
    },
};
