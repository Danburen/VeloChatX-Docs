# 跨服聊天以及分区配置
以下配置均在在config.yml中可以找到并且修改。

## 配置链接Velocity的服务器
在`config.yml`下你可以找到 `server-display` 属性

这个属性的键对应的是velocity配置文件的 `[server]` 属性
`key值` 通常如下：
```toml
[servers]
# Configure your servers here. Each key represents the server's name, and the value
# represents the IP address of the server to connect to.
lobby = "127.0.0.1:25565"
server1 = "127.0.0.1:25566"
server2 = "127.0.0.1:25567"
```
其中`lobby`,`server1`,`server2`对应的是几个子服的 server `key`

VeloChatX在读取配置文件的时候会通常遍历这个`key`，对velocity的每个子服进行匹配，
然后将匹配到的子服进行转译`key->value`的过程，玩家在游戏中发送
消息的时候，占位符`{server}`，`{proxy}`会对应转义到以下对应的名称

```yaml
server-display:
  enable: true
  proxy: "[§5代理服§r]"
  display:
    lobby: "[§d大厅服§r]"
    server1: "[§3小游戏服§r]"
    server2: "[§2生存服§r]"
    # 可以往下继续添加，与velocity中的一一对应
```
其中`proxy`代表的是代理端的消息。
代理端(Velocity的Console)是可以通过[指令](/reference/cmdsAndPerms)向玩家发送
[提及](/reference/cmdsAndPerms#mention-command)或者[私聊](/reference/cmdsAndPerms#message-command)消息
> [!WARNING]
> 请注意，当玩家在下方列表当中发送一个不存在的子服中发送了消息，那么`server`字符会强制转化为`未知`或`UNKNOWN`

## 配置区服聊天(频道)
在配置文件中，你可以找到`channels`键(属性)，通常结构如下：
```yaml
channels:
  global: true
  channel-list:
    login:
      display: "[§6登录频道§r]"
      welcome:
        enable: true
        message: "欢迎加入登录频道"
      servers:
        - lobby
    games:
      display: "[§6小游戏频道§r]"
      welcome:
        enable: true
        message: "欢迎加入小游戏频道"
      servers:
        - server1
    survive:
      display: "[§6生存频道§r]"
      welcome:
        enable: true
        message: "欢迎加入生存频道"
      servers:
        - server2
    # 可以按照以上的格式往下添加多个频道(请注意格式要保持一致)
```
`global` 属性决定了是否允许全区进行全服互通，即所有区都不进行隔离，各自全部互通，
当设置为`false`的时候，区服之间会进行隔离，即其他区(`频道`/`channel`)的消息是没有办法
进行传递进来的。(这种情况不影响玩家的**跨服私聊和提及**)

`servers`键下的每一个元素对应的都是[上文](#配置链接velocity的服务器)提到的velocity子服的键

> [!INFO]
> 值得注意的是，通常情况下，一组频道可以有多个子服务器，一个服务器可以在多个频道内。
>
> VeloChatX会尝试处理`channels`的每个`channel`的子服的消息交集，然后才会转发。

> [!TIP]
> * 当有多个`channel`同名的时候，只有第一次出现的`channel`会生效
> * 如果某个子服不在`channels`当中，那么会默认这个子服是全服互通，`{channel}`占位符会被替换成空白
