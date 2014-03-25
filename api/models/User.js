/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

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
    }
  },

  // Lifecycle Callbacks
  afterCreate: function(newlyInsertedRecord, next) {
    // TODO
    // Create the row in UserStat collection
    next();
  }
};
