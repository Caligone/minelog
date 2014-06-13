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

  },

  //ToDo : Get the real kill obj (with save() !)
  afterCreate: function(kill, cb) {
    PlayerStat.findOne({player: kill.killer, server: kill.server}).exec(function(err, killer) {
      if(err || killer === undefined) { console.log(err); cb(); return; }
      PlayerStat.findOne({player: kill.killed, server: kill.server}).exec(function(err, killed) {
        if(err || killed === undefined) { console.log(err); cb(); return; }
        killer.kills++;
        killer.ratio = killer.kills/(killer.pvpDeaths === 0 ? 1 : killer.pvpDeaths);
        killer.save(function(err) {
          if(err) { console.log(err) }
          killed.pvpDeaths++;
          killed.ratio = killed.kills/killed.pvpDeaths;
          killed.save(function(err) {
            cb();
          });
        });
      });
    });
  }
};
