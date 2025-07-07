# Main Configuration
The following configurations can be found and modified in `config.yml`.

> [!IMPORTANT]
> All configuration files use `yaml` format, which is sensitive to formatting. Please follow `yaml` syntax strictly when modifying.

## Configuring Cross-Server Chat Format
VeloChatX implements cross-server chat through `placeholders` (similar to `Essentials` plugin in Bukkit).

In the configuration file, you'll find:
```yaml
chat-format: "{channel}{Group}{Server}{Prefix}{Player}{Suffix} §8:§r {Message}"
```

The placeholders correspond to:
- `channel`: Player's current channel
- `Group`: Player's group
- `Prefix/Suffix`: Player's prefix/suffix
- `Server`: Player's server (matches [`server-display`](/en/guide/config/cross-server-chat))
- `player`: Player's name

> [!WARNING]
> **`SERVER`**, **`MESSAGE`**, and **`PlayName`** are mandatory fields.
> VeloChatX checks for these placeholders during loading. If missing, it will use default values: **`format:[{Server}]{PlayerName}: {Message}`**

> [!TIP]
> Placeholders are case-insensitive but lowercase is recommended.
> Most text supports `Minecraft Chat Code` and will parse `§` and `&` color codes.

## Console Output Configuration
`Velocity` typically doesn't log sub-server chat messages to maintain isolation between `proxy` and `backend` communication channels.

To unify chat logging, the plugin provides console output configuration:

```yaml
log-text:
  enable: true
  convert: true
```
- `convert`: Whether to transform text colors for console output (showing game-style colors without code clutter)

> [!TIP]
> Color conversion uses [ANSI escape codes](https://conemu.github.io/en/AnsiEscapeCodes.html). Modern terminals support these codes.
> If you encounter color display issues, set `convert` to `false`.

## Mention Configuration {#mention-config}
Configure `mention-show-title` to control mention title displays when sending mention messages to players.

Main/sub titles can be configured in `message.yml` under `mention-...` properties. Title displays include timed animations:

```yaml
mention-show-title:
  enable: true
  time:
    fade-in: 1
    stay: 2
    fade-out: 1
```
- `fade-in`: Title fade-in duration (seconds)
- `stay`: Duration after fade-in completes (seconds)
- `fade-out`: Title fade-out duration (seconds)

> [!TIP]
> All durations are in `seconds`.
> Mentions occupy the player's main screen for visibility.
> Sound alerts will be added in future updates.

## Player TabList Replacement Configuration
To maintain consistent player information display across servers:

```yaml
tab-list:
  enable: true
  interval: 1000
  format: "{server}{prefix}{player}{Suffix}"
  header: "Welcome to {proxy} | Current server: {server}"
  footer: "Online §8{online}§r / §8{total_online}§r | Ping: §8{ping}"
```
- `interval`: Refresh interval (milliseconds). `0` means passive refresh (only on player join/leave)
- `format`: Individual player display format (supports player/server placeholders)
- `header`/`footer`: TabList header/footer (server placeholders only)

> [!TIP]
> TabList updates may impact performance on large player bases (though negligible on high-performance servers).
> Increase the interval value if performance is a concern.

## Banned Words Filter Configuration
To restrict inappropriate content, VeloChatX checks messages before forwarding:

```yaml
ban-words:
  enable: true
  log-to-console: true
  words: "*,*,..."
```
- `log-to-console`: Logs violations for admin review
- `words`: Comma-separated list of banned terms (messages containing these will be blocked)