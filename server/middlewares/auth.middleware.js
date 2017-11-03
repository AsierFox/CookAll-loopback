'use strict';

module.exports = {
    ensureAuth: ensureAuth
};

function ensureAuth(req, res, next) {
    console.log('auth.middleware - ensureAuth');

    next();
}
