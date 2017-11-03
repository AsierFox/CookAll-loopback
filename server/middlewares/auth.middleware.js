'use strict';

const apiHeaderService = require('./../services/apiHeader.service');

module.exports = {
    ensureAuth: ensureAuth
};

function ensureAuth(req, res, next) {
    if (!req.accessToken) {
        return res.status().json(apiHeaderService.authError());
    }
    next();
}
