/**
 * UserStat
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  adapter: 'mongo',
  schema: true,

  attributes: {

     user: {
       model: 'user'
     },
    server: {
        model: 'server'
     },
     ratio: {
       type: 'float',
       defaultsTo: 0
     },
     timePlayed: {
       type: 'integer',
       defaultsTo: 0
     },
     blocksBroken: {
       type: 'integer',
       defaultsTo: 0
     },
     blocksPlaced: {
       type: 'integer',
       defaultsTo: 0
     },
     levelMax: {
       type: 'integer',
       defaultsTo: 0
     },
     verbosity: {
       type: 'integer',
       defaultsTo: 0
     },
     kills: {
       type: 'integer',
       defaultsTo: 0
     },
     pvpDeaths: {
       type: 'integer',
       defaultsTo: 0
     },
     stupidDeaths: {
       type: 'integer',
       defaultsTo: 0
     }
  }

};
