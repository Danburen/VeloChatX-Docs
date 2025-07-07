# Permissions and Commands

This page explains the usage of VeloChatX commands and their associated permissions.

VeloChatX supports the following aliases: `vcx`, `vc`, `chatx`

> [!TIP]
> Anyone (including players and administrators) can use `/vcx help` to get command assistance at any time.

## Player Commands
### Permission path: `velochatx.player`
* ### Mention a player `/mention <player>` {#mention-command}
  Displays a mention message to another player.

  Aliases: `men`, `at`

  The displayed title can be configured in [Mention Title Configuration](/guide/config/main#mention-config) and `message.yml`.

* ### Private message `/vcmsg <player> <message>` {#message-command}
  Sends a private message between players (not visible to others).

  Alias: `vctell`

* ### Toggle cross-server chat `/vcx on/off`
* ### Chat blocking
  Players can choose to block mentions, private messages, and cross-server chat from other players.
    * #### Ignore player messages `/vcx ignore <player>`
      Blocks messages and mentions from a specific player while still showing "message sent" status to the ignored player (received but ignored).
    * #### Reject player messages `/vcx reject <player>`
      Rejects messages from a specific player and shows "message rejected" status to the sender (not accepted).
    * #### View ignore/reject list `/vcx list <player>`
    * #### Unignore/Unreject a player `/vcx remove <player>`

## Administrator Commands

### Commands executable by both players and console
* #### Hot-reload configurations `/vcx reload [config/message/broadcast]`
  Reloads `config.yml`, `message.yml`, or `broadcast.yml` without restarting.
  > [!TIP]
  > Some configuration changes may require a server restart to take effect.
* #### Display server status `/vcx show-channel-info`
  Shows information about all channels and their corresponding servers, including online players.

### In-game only commands
* #### Preview placeholders `/vcx placeholder <placeholder>`
  `<placeholder>` should be a VeloChatX placeholder wrapped in `{}` or `%%`.
  Refer to [Placeholders](/reference/placeholder) for details.