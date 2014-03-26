/**
 * Role
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  adapter: 'mongo',
  schema: true,

  attributes: {

    id_user: {
      type: 'string',
      required: true
    },
    id_server: {
      type: 'string',
      required: true
    }

  }

};
