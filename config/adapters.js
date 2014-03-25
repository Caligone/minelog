module.exports.adapters = {
  'default': 'mongo',

  mongo: {
    module: 'sails-mongo',
    schema: true,
    host: 'localhost',
    port: 27017,
    database: 'minelog'
  }
};
