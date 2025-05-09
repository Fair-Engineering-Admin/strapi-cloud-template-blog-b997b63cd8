"use strict";

/**
 * fair controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::fair.fair");
module.exports = createCoreController("api::fair.fair", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    const entities = await strapi.entityService.findMany("api::fair.fair", {
      ...query,
      populate: {
        get_started_v3: true,
        info: true,
        contact: true,
        questions: true,
        credit_report: true,
        submit_claim: true,
        sign: true,
      },
    });
    return this.transformResponse(entities);
  },
}));
