# Minelog - vAlpha

An (awesome) plateform for Minecraft players. Working with a server-side plugin which populates the minelog database with informations like block placed/broken, pvp ratio, etc.

## Getting started ##

### Linux installation ###

First, you will need to install [nodejs](http://nodejs.org/) and [npm](https://www.npmjs.org/‎) if it is not already done. [Mongodb](https://www.mongodb.org/) is also required.
After cloning this repo, install the sails dependency:
```sh
npm install  -g sails
```
Then install dependencies:
```sh
npm install
```
You can launch the app with the following command:
```sh
sails lift
```

### First test ###

To ensure everything run smoothly, have a try at **http://127.0.0.1:1337/User/create?pseudo=user1**
You are good to go!

### Fixtures ###

To populate the database : ``` /Fixtures/populate ```


## Plugin API methods

The followings methods are used by the Bukkit plugin :

* ``` /api/connect?key=:key&name=:name&address=:address&version=:version&size=:size ``` Update the server into the database
* ``` /api/disconnect?key=:key ``` Update the server into the database
* ``` /api/heartbeat?key=:key ``` Update the lastheartbeat field
* ``` /api/playerconnect?key=:key&pseudo=:pseudo ``` *:player* connected (create the user or update lastlogin and return information)
* ``` /api/playerdisconnect?key=:key&pseudo=:pseudo ``` *:player* disconnected (create the user or update lastlogin and return information)
* ``` /api/playerkilled?key=:key&killer=:killer&killed=:killed&weapon=:weapon ``` *:killer* killed *:killed* with *:weapon* (add kill and inc pvpdeaths and update ratio)
* ``` /api/updatePlayer?key=:key&pseudo=:pseudo&verbosity=:verbosity&blocksBroken=:blocksBroken&blocksPlaced=:blocksPlaced&stupidDeaths=:stupidDeaths&level=:level``` inc the stats of *:player*
* ``` /api/player?key=:key&pseudo=pseudo ``` Get information of a player

## WebUI

* Home
* Servers
* Players
* FAQ
* Feedback


## ToDo

- Improve Fixture Calculate method
- Player profile page
- Server page
- Write FAQ page
- Auto API broadcasting
- Mail system for feedback

## Done

- Implement Skin creation (ovski ws)
- Internationalization
