'use strict';

/**
 * register-date service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-date.register-date');
