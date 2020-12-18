const {
    OK, CREATED, NO_CONTENT, BAD_REQUEST, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, REQUEST_TIMEOUT
} = require('../config/error-codes');

module.exports = {
    ID_LESS_0: {
        message: 'User ID must be greater than 0',
        code: BAD_REQUEST
    },
    NOT_VALID_ID: {
        message: 'ID is not valid',
        code: BAD_REQUEST
    },
    NOT_VALID_BODY: {
        message: 'Not valid data',
        code: BAD_REQUEST
    },
    ITEM_EXISTS: {
        message: 'Item already exists',
        code: BAD_REQUEST
    },
    EMAIL_IN_USE: {
        message: 'Email already in use',
        code: BAD_REQUEST
    },
    NO_SUCH_USER: {
        message: 'No such user',
        code: NO_CONTENT
    },
    INVALID_DETAILS: {
        message: 'Invalid details',
        code: UNAUTHORIZED
    },
    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        code: UNAUTHORIZED
    },
    ITEM_CREATED: {
        message: 'ITEM created',
        code: CREATED
    },
    OK: {
        message: 'OK',
        code: OK
    },
};
