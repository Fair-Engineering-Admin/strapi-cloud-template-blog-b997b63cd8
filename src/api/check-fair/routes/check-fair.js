"use strict";

/**
 * check-fair router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::check-fair.check-fair", {
  config: {
    find: {
      auth: false,
    },
  },
});
