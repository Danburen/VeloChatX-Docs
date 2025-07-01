# 被动广播配置
以下配置均在在`broadcast.md`中可以找到并且修改。

本页面介绍的是有关被动广播的配置，该广播的触发一般是通过玩家加入或者离开服务器或者代理服的时候触发。
如果想要主动或则定时主动广播配置，请跳转[定时广播配置](/guide/config/active-broadcast)
## 加入和离开消息广播
VeloChatX 提供了玩家 `离开代理服` 或 `更换子服` 时候的消息播报。

通常可以在配置文件下找到如下两个属性：

`join-leave-broadcast` 是当玩家离开一个子服的时候会触发，对原来的子服发送离开消息，对新进入的子服发送加入消息。

`join-leave-proxy-broadcast` 是者是当玩家彻底连接或者离开(断开连接)代理服的时候发送的消息，无论加入的子服是哪个。

配置文件结构一般如下：
```yaml
join-leave-broadcast:
  enable: true
  log-to-console: true
  send-to-all-subServer: false
  broadcast-in-channel: true
  join-prefix: "§a(+)§r"
  leave-prefix: "§c(-)§r"
  player-join-message: "{Group}{Prefix}{Player}{Suffix} 加入了 {Server}"
  player-leave-message: "{Group}{Prefix}{Player}{Suffix} 离开了 {Server}"

join-leave-proxy-broadcast:
  enable: true
  log-to-console: true
  send-to-all-subServer: true
  join-prefix: "§a[+]§r"
  leave-prefix: "§c[-]§r"
  player-join-message: "{Group}{Prefix}{Player}{Suffix} 现在加入了 {Proxy}"
  player-leave-message: "{Group}{Prefix}{Player}{Suffix} 现在离开了 {Proxy}"
```
`join-prefix`,`leave-prefix` 分别对应的是进入离开广播消息的前缀。

`log-to-console` 表示是否在终端输出玩家的消息。

`send-to-all-subServer` 表示是否对所有子服进行广播消息(会覆盖下方的broadcast-in-channel)。

`broadcast-in-channel` 表示是否对服务器所属的频道进行广播。

## 欢迎消息广播
VeloChatX 允许玩家加入或离开代理服的时候发送欢迎广播消息。

该配置结构一般如下：
```yaml
welcome-broadcast:
  enable: true
  only-first-join: false
  message: "欢迎加入§5群组§r!"
```