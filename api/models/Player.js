/**
 * Player
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: 'production',
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
      defaultsTo: 'PLAYER'
    },
    online: {
      type: 'boolean',
      defaultsTo: true,
    },
    servers: {
      collection: 'server',
      via: 'players',
      dominant: true
    },
    stats: {
      collection: 'playerstat',
      via: 'player'
    }
  }
};
