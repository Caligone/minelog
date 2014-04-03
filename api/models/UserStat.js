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
       defaultTo: 0
     },
     timePlayed: {
       type: 'integer',
       defaultTo: 0
     },
     blocksBroken: {
       type: 'integer',
       defaultTo: 0
     },
     blocksPlaced: {
       type: 'integer',
       defaultTo: 0
     },
     levelMax: {
       type: 'integer',
       defaultTo: 0
     },
     verbosity: {
       type: 'integer',
       defaultTo: 0
     },
     kills: {
       type: 'integer',
       defaultTo: 0
     },
     pvpDeaths: {
       type: 'integer',
       defaultTo: 0
     },
     stupidDeaths: {
       type: 'integer',
       defaultTo: 0
     }
  }

};
