# Let's Surf

## Project Structure

- `/extracted` - Original game files extracted from Edge 122.0.2365.106, from a fresh installation of Windows 11 24H2 (Build 26100.1742).
  Will not work without patches to the game.
- `/fixed` - Beautified game files with minimal changes modified to work without `chrome.send`
- `/mod` - Partially deobfuscated version with various other patches

## About

Last version of the original Let's Surf from Microsoft Edge extracted
and modified to be usable in other browsers.

Also contains a modded version with useful changes.

NOTE: This repository contains the previous version of edge surf before Edge 124.

## Modded Feautures

- Speedrun mode: Disable stopping and have only 1 heart
- Hardcore mode: Boosts, Lives, Ramps and other pickups do not spawn.
- Invisibility mode: Invisible player

## Important Classes

`SurfMain` Responsible for initing all other objects

`GameDataManager` Stores game state in `this.sys.game` and `this.sys.session`

`StatsWrapper` Wrapper around saving and loading stats.

`CheatManager` Handles cheat inputs

`ThemeManager` Stores current theme info and spritesheets

`PlayerSpriteManager` Stores player spritesheets

`PlayerManager` Manages player data

`RenderManager` Renders the game

`MapBuilder` Builds objects in the level, handles clusters and individual objects

`PhysicsManager` Processes the player crashing into objects

`UIManager` Manages React UI