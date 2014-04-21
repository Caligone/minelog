/**
 * Player
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  connection: 'production',
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
    },
    role: {
      type: 'string',
      in: ['ADMIN', 'PLAYER'],
      defaultsTo: 'PLAYER'
    },
    online: {
      type: 'boolean',
      defaultsTo: true,
    },
    servers: {
      collection: 'server',
      via: 'players',
      dominant: true
    },
    skin: {
      model: 'skin'
    },
    stats: {
      collection: 'playerstat',
      via: 'player'
    }
  }/*,

  afterCreate: function(player, callback) {
    Player.findOne({id: player.id}).exec(function(err, player) {
      var request = require('request');
      request({url: "http://s3.amazonaws.com/MinecraftSkins/"+player.pseudo+".png", encoding: null}, function (err, res, body) {
        if (!err && res.statusCode == 200) {
          var image = body.toString('base64');
          Skin.create({player: player.id, skin: image }).exec(function(err, skin) {
            Skin.findOne({id: skin.id}).exec(function(err, skin) {})
            console.log(skin);
            console.log(player.skin);
            player.skin = skin.id;
            player.save(function(err, player) {
              console.log(player);
              callback();
            })
          });
        } else {
          throw new Error("Can not download "+player.pseudo+"'skin");
          callback();
        }
      });
    });
  }
  */
};
