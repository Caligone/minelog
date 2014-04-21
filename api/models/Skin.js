/**
 * Skin
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
    skin: {
      type: 'string',
      required: true
    }
  }
};
