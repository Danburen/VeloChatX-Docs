# Scheduled Broadcast Configuration
The following configurations can be found and modified in `broadcast.md`.

This page explains scheduled broadcasts triggered by the plugin's `built-in timer`, designed to periodically send messages like beginner guides or game tips.  
For passive broadcasts triggered by player join/leave events, see [Passive Broadcast Configuration](/en/guide/config/passive-broadcast).

## Prerequisites
VeloChatX uses a `Hybrid Broadcast` model to manage scheduled messages, ensuring isolated game services across different channels while adapting to partitioned chat modes.

The `Hybrid Broadcast` consists of:
- `Global Broadcast` (server-wide)
- `Local Broadcast` (channel-specific)

When sending scheduled broadcasts, VeloChatX:
1. Finds channel-specific messages (`Local Broadcast`) for matched servers
2. Merges them with `Global Broadcast` messages (if both enabled)
3. Randomly selects from the combined pool for broadcasting

Configure the interval via `interval` property (in seconds).

> [!TIP]
> Scheduled broadcasts target all players across servers. For large player bases, increase the interval to reduce performance impact.

## Global Broadcast
Configured under `global` property for server-wide messages (unaffected by channel broadcasts), typically used for announcements like official groups or server updates.

Example configuration:
```yaml
global:
  enable: true
  prefix: "§7[§bServerBot§7]§r §8:§r"
  message-list:
    - "Welcome to {proxy}! Join our adventure!"
    - "Daily §aactive§r players may receive rewards!"
    - "§cNotice:§r Please follow server rules."
    - "§fEnjoy our §9custom plugins§r for unique gameplay!"
    - "§dVarious§r §agame modes§r available!"
    - "§7Join our §bQQ Group§r for latest updates!"
    - "§fNew players§r, ask admins for help!"
    - "§eInvite friends to §gplay§r together!"
    - "§aWelcome to §7{server}§r, enjoy your stay!"
    - "§5Server-wide§r §cevent§r starting soon!"
    - "§dThanks for your support! We'll keep improving!"
```
- `prefix`: Message prefix for all global broadcasts

> [!IMPORTANT]
> When enabled, `message-list` content merges (global messages prioritized).

## Channel-Specific Broadcast
Configured under `locale` field. When global broadcast is disabled, only matched servers receive broadcasts.

Example configuration:
```yaml
locale:
  enable: true
  broadcast-list:
    example:
      enable: true
      prefix: "[§aServerBot§r] §8:§r"
      message-list:
        - "Server is §aunder construction§r, more content coming!"
        - "§6Welcome§r to our official group"
        - "Welcome to our server community"
        - "§dVarious§r §agame modes§r available!"
      channel-list:
        - login
      server-list:
        -
    example2:
      enable: false
      prefix: "[§aServerBot§r] §8:§r"
      message-list:
        - "Server is §aunder construction§r, more content coming!"
        - "§6Welcome§r to our official group"
        - "Welcome to our server community"
        - "§bStarter zone§r is open! Begin your adventure!"
      channel-list:
        - lobby
        - games
        - survive
      server-list:
        -
```
Key fields:
- `broadcast-list`: Channel-specific broadcast configurations
- Sub-properties (`example1`, `example2`): Channel group names
- `channel-list` & `server-list`: Target channels/servers
- `prefix`: Custom prefix per channel group

> [!TIP]
> - Duplicate **channel broadcast** names load only the first occurrence
> - For channels/servers in multiple **channel broadcasts**:
    >   * Only the last `prefix` applies
>   * Duplicate messages merge (no increased frequency)