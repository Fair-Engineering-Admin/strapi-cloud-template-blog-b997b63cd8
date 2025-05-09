"use strict";

/**
 * check-fair service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::fair.fair");
