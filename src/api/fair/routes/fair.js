"use strict";

/**
 * check-fair router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::fair.fair", {
  config: {
    find: {
      auth: false,
    },
  },
});
