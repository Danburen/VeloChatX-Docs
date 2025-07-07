# What is VeloChatX?
VeloChatX is a versatile cross-server chat plugin for Minecraft Velocity proxy.

> Try cross-server chat? [Quick Start](/en/guide/intro/get-start)

## Features
### Stable
Gracefully handles missing configuration values with defaults.

### Lightweight
Built with `WaterAPI`, `Velocity API`, `LuckPerms API`, and `H2Database` - no heavy dependencies.

## Functionality
* ### Cross-Server Chat
  Selectively forwards messages between servers.
  ::: warning
  Only forwards cross-server messages - doesn't affect internal server chat.
  :::
* ### Partitioned Chat
  Isolates chat between channels while allowing global configuration.
* ### Cross-Server Private Messages
  Player-to-player private messaging across servers.
* ### Chat Blocking
  Players can permanently ignore/reject messages from others.
* ### Banned Words
  Filters prohibited words before forwarding, with console logging.
  ::: warning
  For internal server word filtering, use third-party plugins.
  :::
* ### Scheduled Broadcasts
  Manage server-wide timed announcements.
* ### Server Statistics
  Unique placeholders for server information display.
* ### TabList Replacement
  Customize player tab display with server info.