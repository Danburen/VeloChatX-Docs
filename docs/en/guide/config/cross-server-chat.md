# Cross-Server Chat and Channel Configuration
The following configurations can be found and modified in `config.yml`.

## Configuring Velocity Server Links
Under `config.yml`, you'll find the `server-display` property.

This property's keys correspond to the `[server]` properties in Velocity's configuration file.
The `key values` typically look like:
```toml
[servers]
# Configure your servers here. Each key represents the server's name, and the value
# represents the IP address of the server to connect to.
lobby = "127.0.0.1:25565"
server1 = "127.0.0.1:25566"
server2 = "127.0.0.1:25567"
```
Here `lobby`, `server1`, and `server2` represent the server `keys` for each sub-server.

VeloChatX reads these configurations by matching these `keys` to Velocity's sub-servers,
then translating them (`key->value`). When players send messages in-game,
placeholders like `{server}` and `{proxy}` will be replaced with the corresponding names below:

```yaml
server-display:
  enable: true
  proxy: "[§5Proxy§r]"
  display:
    lobby: "[§dLobby§r]"
    server1: "[§3MiniGames§r]"
    server2: "[§2Survival§r]"
    # Add more below, matching Velocity's configuration
```
The `proxy` field represents the proxy server (Velocity Console), which can send
[mentions](/en/reference/cmdsAndPerms#mention-command) or [private messages](/en/reference/cmdsAndPerms#message-command)
to players via [commands](/en/reference/cmdsAndPerms).

> [!WARNING]
> If a player sends a message from a server not listed below, the `server` placeholder
> will be forcibly converted to `UNKNOWN` or `未知`.

## Configuring Channel-based Chat
In the configuration file, you'll find the `channels` property with this structure:

```yaml
channels:
  global: true
  channel-list:
    login:
      display: "[§6Login§r]"
      welcome:
        enable: true
        message: "Welcome to the Login Channel"
      servers:
        - lobby
    games:
      display: "[§6MiniGames§r]"
      welcome:
        enable: true
        message: "Welcome to MiniGames Channel"
      servers:
        - server1
    survive:
      display: "[§6Survival§r]"
      welcome:
        enable: true
        message: "Welcome to Survival Channel"
      servers:
        - server2
    # Add more channels following the same format
```
The `global` property determines whether all channels communicate globally (no isolation).
When set to `false`, channels become isolated (messages won't cross channels),
though this doesn't affect **cross-server private messages and mentions**.

Each entry under `servers` corresponds to the Velocity sub-server keys mentioned [above](#configuring-velocity-server-links).

> [!INFO]
> Important notes:
> - A channel can include multiple sub-servers
> - A server can belong to multiple channels
>
> VeloChatX processes message intersections between channels before forwarding.

> [!TIP]
> - If multiple channels share the same name, only the first one takes effect
> - Servers not listed in `channels` default to global chat, with `{channel}` showing blank