module.exports.adapters = {
  'default': 'production',

  production: {
    module: 'sails-mongo',
    schema: true,
    host: 'localhost',
    port: 27017,
    database: 'minelog'
  },

  test: {
    module: 'sails-mongo',
    schema: true,
    host: 'localhost',
    port: 27017,
    database: 'minelog_test'
  }
};
