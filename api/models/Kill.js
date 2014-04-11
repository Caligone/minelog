/**
 * Kill
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  adapter: 'production',
  schema: true,

  attributes: {

   killed : {
     model: 'user'
   },
   killer : {
     model: 'user'
   },
   server : {
     model: 'server'
   },
   date : {
     type: 'datetime',
     defaultsTo: new Date().toISOString(),
     required: false
   },
   weapon: {
     type: 'string',
     required: true
   }

  }

};
