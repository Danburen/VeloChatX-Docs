# Passive Broadcast Configuration
The following configurations can be found and modified in `broadcast.md`.

This page explains passive broadcast settings, which are triggered when players join/leave servers or the proxy.  
For active/scheduled broadcasts, see [Scheduled Broadcast Configuration](/en/guide/config/active-broadcast).

## Join/Leave Message Broadcasts
VeloChatX provides announcements when players:
- `Leave the proxy`
- `Switch sub-servers`

Key configuration properties:

`join-leave-broadcast`: Triggers when players switch sub-servers (leave message to old server, join message to new server)

`join-leave-proxy-broadcast`: Triggers when players fully connect/disconnect from the proxy (regardless of specific sub-server)

Configuration structure:
```yaml
join-leave-broadcast:
  enable: true
  log-to-console: true
  send-to-all-subServer: false
  broadcast-in-channel: true
  join-prefix: "§a(+)§r"
  leave-prefix: "§c(-)§r"
  player-join-message: "{Group}{Prefix}{Player}{Suffix} joined {Server}"
  player-leave-message: "{Group}{Prefix}{Player}{Suffix} left {Server}"
```
```yaml
join-leave-proxy-broadcast:
  enable: true
  log-to-console: true
  send-to-all-subServer: true
  join-prefix: "§a[+]§r"
  leave-prefix: "§c[-]§r"
  player-join-message: "{Group}{Prefix}{Player}{Suffix} connected to {Proxy}"
  player-leave-message: "{Group}{Prefix}{Player}{Suffix} disconnected from {Proxy}"
```

Key properties:
- `join-prefix`/`leave-prefix`: Message prefixes
- `log-to-console`: Whether to output messages to console
- `send-to-all-subServer`: Broadcasts to all sub-servers (overrides `broadcast-in-channel`)
- `broadcast-in-channel`: Broadcasts within the server's channel

## Welcome Message Broadcast
VeloChatX can send welcome messages when players join the proxy.

Configuration structure:
```yaml
welcome-broadcast:
  enable: true
  only-first-join: false
  message: "Welcome to §5our network§r!"
```