/**
 * Server
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
      defaultTo: Math.random().toString(36).replace(/[^a-z0-9]+/g, ''),
      unique: true
    },
    lastHeartBeat: {
      type: 'datetime',
      defaultTo: new Date().toISOString(),
      required: false
    },
    active: {
      type: 'boolean',
      defaultTo: true,
      required: false
    }

  }

};
