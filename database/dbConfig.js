const knex = require('knex');
const knexConfiguration = require('../knexfile.js');

const environment = process.env.ENVIRONMENT || "development";

module.exports = knex(knexConfiguration[environment]);

