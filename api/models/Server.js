/**
 * Server
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  adapter: 'production',
  schema: true,
  autoUpdatedAt: false,

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
    users: {
      collection: 'user',
      via: 'servers',
      dominant: true
    }

  }

};
