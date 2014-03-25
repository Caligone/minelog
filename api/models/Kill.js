/**
 * Kill
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  adapter: 'mongo',
  schema: true,

  attributes: {

   id_user_killed : {
     type: 'string',
     required: true
   },
   id_user_killer : {
     type: 'string',
     required: true
   },
   id_server : {
     type: 'string',
     required: true
   },
   date : {
     type: 'datetime',
     defaultTo: new Date().toISOString(),
     required: false
   },
   weapon: {
     type: 'string',
     required: true
   }

  }

};
