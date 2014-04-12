# Minelog - vAlpha

An (awesome) plateform for Minecraft players. Working with a server-side plugin which populates the minelog database with informations like block placed/broken, pvp ratio, etc.

## Getting started ##

### Linux installation ###

First, you will need to install [nodejs](http://nodejs.org/) and [npm](https://www.npmjs.org/‎) if it is not already done. [Mongodb](https://www.mongodb.org/) is also required.    
After cloning this repo, update the node modules of the project:
```sh
npm update
```
Then install sails:
```sh
npm install -g sails
```
You can launch the app with the following command:
```sh
sails lift
```

### First test ###

To ensure everything run smoothly, have a try at **http://127.0.0.1:1337/api/v1/user/create?pseudo=user1**    
You are good to go!

## Plugin API methods
The followings methods are used by the Bukkit plugin.

* ``` /api/connect?key=:key&name=:name&address=:address&version=:version ``` Create or update the server into the database
* ``` /api/heartbeat?key=:key ``` Update the lastheartbeat field 
* ``` /api/playerconnect?key=:key&pseudo=:pseudo ``` *:player* connected (create the user or update lastlogin and return information)
* ``` /api/playerkilled?key=:key&killer=:killer&killed=:killed&weapon=:weapon ``` *:killer* killed *:killed* with *:weapon* (add kill and inc pvpdeaths and update ratio)
* ``` /api/updatePlayer?key=:key&player=:player&verbosity=:verbosity&blocksBroken=:blocksBroken&blocksPlaced=:blocksPlaced&stupidDeaths=:stupidDeaths&level=:level``` inc the stats of *:player*

## WebUI

* Home
  * Trending Players
  * Trending Servers
* Player Info
  * Favorite weapon
  * Last kills
* Server Info
  * Trending Players
  * Last kills
* Search Player
* Search Server

## ToDo
  * Design the web app on Macaw
  * Write plugin API

## Done
  ✔ Write an awesome README
