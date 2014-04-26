/**
 * PlayerStat
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: 'production',
  schema: true,

  attributes: {

     player: {
       model: 'player'
     },
    server: {
        model: 'server'
     },
     ratio: { // Update after Kill create, after PlayerStat Update
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
     kills: { // Update after Kill create
       type: 'integer',
       defaultsTo: 0
     },
     pvpDeaths: { // Update after Kill create
       type: 'integer',
       defaultsTo: 0
     },
     stupidDeaths: {
       type: 'integer',
       defaultsTo: 0
     }
  },

};
