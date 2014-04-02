# Minelog-API - vAlpha

An (awesome) plateform for Minecraft players. Working with a server-side plugin which populates the minelog database with informations like block placed/broken, pvp ratio, etc.

## Plugin API methods
The followings methods are used by the Bukkit plugin.

* ``` /api/v1/connect?key=:key&name=:name&address=:address&version=:version ``` Create or update the server into the database
* ``` /api/v1/heartbeat?key=:key ``` Update the lastheartbeat field
* ``` /api/v1/playerconnect?key=:key&pseudo=:pseudo ``` *:player* connected (create the user or update  lastlogin)
* ``` /api/v1/playerdisconnect?key=:key&pseudo=:pseudo ``` *:player* disconnected (update timeplayed)
* ``` /api/v1/playerkilled?key=:key&killer=:killer&killed=:killed&weapon=:weapon ``` *:killer* killed *:killed* with *:weapon* (add kill and inc pvpdeaths and update ratio)
* ``` /api/v1/playerdie?key=:key&killed=:killed&weapon=:weapon ``` *:killer* killed *:killed* with *:weapon* (add kill and inc stupiddeaths)
* ``` /api/v1/playerplaced?key=:key&player=:player&block=:block ``` *:player* placed a block of *:block* (inc blocksplaced)
* ``` /api/v1/playerbroke?key=:key&player=:player&block=:block ``` *:player* broke a block of *:block* (inc blocksbroken)
* ``` /api/v1/playerlevel?key=:key&player=:player&level=:level ``` *:player* reach the level *:level* (update levelmax if >)
* ``` /api/v1/playermessage?key=:key&player=:player ``` *:player* write something into the ingame chat (inc verbosity)

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
