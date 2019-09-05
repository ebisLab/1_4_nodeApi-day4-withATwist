const knex = require('knex');
const secrets = require('../config/secrets.jd')

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

module.exports = knex(config);
