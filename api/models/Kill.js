/**
 * Kill
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: 'production',
  schema: true,

  attributes: {

   killed : {
     model: 'player'
   },
   killer : {
     model: 'player'
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
