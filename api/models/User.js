/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  adapter: 'mongo',
  schema: true,
  autoUpdatedAt: false,

  attributes: {
    pseudo: {
      type: 'string',
      required: true,
      unique: true,
      notNull: true,
      maxLength: 30,
      minLength: 3
    },
    lastLogin: {
      type: 'datetime',
      defaultsTo: new Date().toISOString()
    },
    role: {
      type: 'string',
      in: ['ADMIN', 'PLAYER'],
      defaultTo: 'PLAYER'
    },
    servers: {
      collection: 'server',
      via: 'users',
      dominant: true
    },
    skin: {
      model: 'skin'
    },
    stats: {
      collection: 'userstat',
      via: 'user'
    }
  }
};
