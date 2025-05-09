"use strict";

/**
 * check-fair controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::check-fair.check-fair");
module.exports = createCoreController(
  "api::check-fair.check-fair",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;
      const entities = await strapi.entityService.findMany(
        "api::check-fair.check-fair",
        {
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
        }
      );

      return this.transformResponse(entities);
    },
  })
);
