/**
 * Server
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: 'production',
  schema: true,
  autoUpdatedAt: false,
  autoCreatedAt: false,

  attributes: {

    name: {
      type: 'string',
      required: true,
      unique: true
    },
    address: {
      type: 'string',
      required: true,
      unique: true
    },
    version: {
      type: 'string',
      required: true
    },
    size: {
      type: 'integer',
      required: true
    },
    onlinePlayers: {
      type: 'integer',
      defaultsTo: 0
    },
    key: {
      type: 'string',
      required: false,
      defaultsTo: Math.random().toString(36).replace(/[^a-z0-9]+/g, ''),
      unique: true
    },
    lastHeartBeat: {
      type: 'datetime',
      defaultsTo: new Date().toISOString(),
      required: false
    },
    creation: {
      type: 'datetime',
      defaultsTo: new Date().toISOString(),
      required: false
    },
    active: {
      type: 'boolean',
      defaultsTo: true,
      required: false
    },
    online: {
      type: 'boolean',
      defaultsTo: true,
    },
    players: {
      collection: 'player',
      via: 'servers',
      dominant: true
    }

  }

};
