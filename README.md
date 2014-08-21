# Minelog - vAlpha

An (awesome) plateform for Minecraft players. Working with a server-side plugin which populates the minelog database with informations like block placed/broken, pvp ratio, etc.

## Getting started ##

### Linux installation ###

First, you will need to install [nodejs](http://nodejs.org/) and [npm](https://www.npmjs.org/‎) if it is not already done. [Mongodb](https://www.mongodb.org/) is also required.
After cloning this repo, install the sails dependency:
```sh
npm install -g sails@beta
```
Then install dependencies:
```sh
npm install
```
Finally, you can launch the app with the following command:
```sh
sails lift
```

### First test ###

To ensure everything run smoothly, have a try at `http://127.0.0.1:1337/User/create?pseudo=user1`
You are good to go!

### Fixtures ###

To populate the database :
* 1) Create an empty 'minelog' database and a user into PostgreSQL
* 2) Execute the app.js file ``` node app.js ``` and close it when it has finished to create the schema
* 3) Import the fixtures with ```  psql -f sql/data.sql -U minelog ```
* 4) Launch again the app.js file and you are ready to dev' :)

## Architecture

### Directories

Here is a directories list :
* `api` : Backend
  * `api.controllers`
  * `api.models`
  * `api.policies`
  * `api.services`
* `assets` : Public ressources
  * `assets/css`
  * `assets/fonts`
  * `assets/i18n`
  * `assets/images`
  * `assets/js`
  * `assets/linker`
* `client/controllers` : Frontend
  * `client/controllers`
  * `client/directives`
  * `client/factories`


### Grunt tasks

* `js_core` : Compile, concat and minify `client` 
* `css_core` : Concat the `assets/css/core`
* `js_dependencies` : Concat and minify `assets/js/dependencies`
* `css_dependencies` : Concat the `assets/css/dependencies`
* `dependencies` : `js_dependencies` + `css_dependencies`
* `core` : `js_core` + `css_core`
* `all` : `core` + `dependencies`
* `default` : Copy the `assets` to `.tmp/public`


### Plugin API methods

The followings methods are used by the Bukkit plugin :

* ``` /api/connect?key=:key&name=:name&address=:address&version=:version&size=:size ``` Update the server into the database
* ``` /api/disconnect?key=:key ``` Update the server into the database
* ``` /api/heartbeat?key=:key ``` Update the lastheartbeat field
* ``` /api/playerconnect?key=:key&pseudo=:pseudo ``` *:player* connected (create the user or update lastlogin and return information)
* ``` /api/playerdisconnect?key=:key&pseudo=:pseudo ``` *:player* disconnected (create the user or update lastlogin and return information)
* ``` /api/playerkilled?key=:key&killer=:killer&killed=:killed&weapon=:weapon ``` *:killer* killed *:killed* with *:weapon* (add kill and inc pvpdeaths and update ratio)
* ``` /api/updatePlayer?key=:key&pseudo=:pseudo&verbosity=:verbosity&blocksBroken=:blocksBroken&blocksPlaced=:blocksPlaced&stupidDeaths=:stupidDeaths&level=:level``` inc the stats of *:player*
* ``` /api/player?key=:key&pseudo=pseudo ``` Get information of a player


## ToDo

- Reorganize the Controllers
- Replace `{{ var }}` by `ng-bind="var"`
- Optimize Server and Player Page (infinite scroll?)
- Player profile page
- Server profile page
- Embed http://ricostacruz.com/nprogress/
- Write FAQ page
- Auto API broadcasting (?)
- Mail system for feedback
- Loading box if necessary
- Store language pref' into localstorage
- Improve animations

## Done

- Improve workflow (less/sass, bower, grunt, etc.)
- Remove CoffeeScript from assets directory
- Implement Skin creation (ovski ws)
- Internationalization
