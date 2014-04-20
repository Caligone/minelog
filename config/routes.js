/**
 * Routes
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {


  // Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, etc. depending on your
  // default view engine) your home page.
  //
  // (Alternatively, remove this and add an `index.html` file in your `assets` directory)
  '/': { view: 'index' },
  '/header': { view: 'header' },
  '/nav': { view: 'nav' },
  '/dashboard': { view: 'dashboard' },
  '/feedback': { view: 'feedback' },
  '/faq': { view: 'faq' },
  '/servers': { view: 'servers' },
  '/players': { view: 'players' },
  '/server': { view: 'server' },
  '/player': { view: 'player' },
  '/404': { view: '404' },

  'dashboard/GlobalSubscribe' : { controller: 'dashboard', action: 'globalSubscribe'},
  'dashboard/GlobalUnsubscribe' : { controller: 'dashboard', action: 'globalUnsubscribe'},
  'dashboard/TopPlayersSubscribe' : { controller: 'dashboard', action: 'topPlayersSubscribe'},
  'dashboard/TopPlayersUnsubscribe' : { controller: 'dashboard', action: 'topPlayersUnsubscribe'},
  'dashboard/TopServersSubscribe' : { controller: 'dashboard', action: 'topServersSubscribe'},
  'dashboard/TopServersUnsubscribe' : { controller: 'dashboard', action: 'topServersUnsubscribe'},

  '/serversList/ServersListSubscribe' : { controller: 'ServersList', action: 'serversListSubscribe'},
  '/serversList/ServersListUnsubscribe' : { controller: 'ServersList', action: 'serversListUnsubscribe'},
  '/serversList/serverNames' : { controller: 'ServersList', action: 'getServerNames'},

  '/playersList/PlayersListSubscribe' : { controller: 'PlayersList', action: 'playersListSubscribe'},
  '/playersList/PlayersListUnsubscribe' : { controller: 'PlayersList', action: 'playersListUnsubscribe'},
  '/playersList/playerNames' : { controller: 'PlayersList', action: 'getPlayerNames'},
  '/player/player' : { controller: 'PlayerController', action: 'player'},


  // If a request to a URL doesn't match any of the custom routes above, it is matched
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

};
