# Placeholder Reference
VeloChatX provides a series of built-in placeholders to display information about players, servers, or proxy messages.
Below is a reference table of these placeholders.

> [!TIP]
> In-game, you can try using the `/vcx placeholder <placeholder>` command to preview placeholder displays.

> [!IMPORTANT]
> Player-specific placeholders only work in **player contexts**, otherwise they won't be populated.
>
> Server-specific placeholders only work in **server contexts** (supported in most cases except for a few specific scenarios).

> The following placeholders apply to server-side displays (server broadcasts, etc.) and player-side displays (player chats, tab lists, etc.).

| No. | Placeholder      | Description                             |
|-----|------------------|-----------------------------------------|
| 1   | `{channel}`      | Current server's channel                |
| 2   | `{server}`       | Current server's display name           |
| 3   | `{proxy}`        | Proxy server name                       | 
| 4   | `{online}`       | Current server's online count           | 
| 5   | `{total_online}` | Total online players across all servers |

> The following placeholders apply to player-side displays (player chats, tab lists, etc.).

| No. | Placeholder     | Description               |
|-----|-----------------|---------------------------|
| 1   | `{player}`      | Current player's name     |
| 2   | `{prefix}`      | Current player's prefix   |
| 3   | `{suffix}`      | Current player's suffix   | 
| 4   | `{group}`       | Current player's group    | 
| 5   | `{ping}`        | Current player's ping     | 

> The following are universal placeholders that work in all contexts.

| No. | Placeholder            | Description                         |
|-----|------------------------|-------------------------------------|
| 1   | `{xxx_channel_online}` | Online count for a specific channel |
| 2   | `{xxx_server_online}`  | Online count for a specific server  |