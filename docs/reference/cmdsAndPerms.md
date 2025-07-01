# 权限和指令

本页面介绍了有关VeloChatX的指令的使用和权限。

VeloChatX支持以下别名：`vcx`,`vc`,`chatx`

> [!TIP]
> 任何情况下，任何人(包括玩家和管理员)都可以通过`/vcx help` 来获取指令的相关帮助。

## 玩家指令
### 权限路径：`velochatx.player`
* ### 提及玩家 `/mention <player>` {#mention-command}
对某人显示提及消息。

别名：`men`,`at`

该消息显示的标题可以在[提及标题配置](/guide/config/main#mention-config)和`message.yml`中进行修改配置。
* ### 私聊 `/vcmsg <player> <message>` {#message-command}
对某人发送私聊消息，该消息仅玩家之间传递。

别名：`vctell`

* ### 断开或开启跨服聊天 `/vcx on/off`
* ### 玩家聊天的屏蔽
玩家可以自行处理选择屏蔽来自其他玩家的提及，私聊以及跨服聊天消息的显示。
  * #### 忽略玩家消息 `/vcx ignore <player>`
    忽略某一个玩家的消息或者提及并屏蔽玩家的跨服小型，这个玩家发送的消息不会被受到，但是被忽略的玩家会看到该消息已发送的状态。
    即`接受并忽略`。
  * #### 拒收玩家消息 `/vcx reject <player>`
    拒收来自某一个玩家的消息或者提及，并屏蔽该玩家的跨服消息，与**忽略玩家消息**有所不同的是，当被忽略玩家向目标发送消息的时候，
    会显示拒收的消息，即`不接受`状态
  * #### 显示拒收/忽略列表 `/vcx list <player>`
  * #### 不再忽略/拒收某个玩家 `/vcx remove <player>`

## 管理员指令

### 玩家/终端都能执行的指令
* #### 热重载插件配置 `/vcx reload [config/message/broadcast]`
热重载插件的`config.yml`，`message.yml`，`broadcast.yml`
> [!TIP]
> 部分配置的修改只能通过重启服务器才能生效。
* #### 显示服务器状态 `/vcx show-channel-info`
显示所有频道和对应子服的信息和在线玩家消息。

### 仅游戏中才能执行的实例
* #### 占位符填充显示 `/vcx placeholder <placeholder>`
`<placeholder>` 对应的是以`{}` 或 `%%` 的VeloChatX占位符。
具体可以参考[占位符](/reference/placeholder)