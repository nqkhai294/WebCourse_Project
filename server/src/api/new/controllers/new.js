'use strict';

/**
 * new controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::new.new',({strapi}) => ({
        async findOne(ctx) {
            const { id } = ctx.params;
            const entity = await strapi.db.query('api::new.new').findOne({ 
                where: { slug: id },
                populate: ['coverImg']
            });
            const sanitizedEntity = await this.sanitizeOutput(entity,ctx);
            return this.transformResponse(sanitizedEntity);
        },
}));
