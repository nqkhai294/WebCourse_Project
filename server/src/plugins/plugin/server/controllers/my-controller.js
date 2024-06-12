'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
