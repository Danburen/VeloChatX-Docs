# 主配置
以下配置均在在config.yml中可以找到并且修改。
> [!IMPORTANT]
> 所有配置文件都是`yaml`格式，`yaml` 对格式要求比较敏感，请严格按照`yaml`的格式进行修改。

## 配置跨服聊天的格式
VeloChatX实现跨服聊天的方式是通过填充`占位符`实现的(类似`Bukkit`插件`Essentials`的占位符),

在配置文件中可以找到如下:
```yaml
chat-format: "{channel}{Group}{Server}{Prefix}{Player}{Suffix} §8:§r {Message}"
```

其中的占位符分别对应：
`channel` 返回玩家所在的服务器频道

`Group` 返回玩家的组别

`Prefix/Suffix` 返回玩家的前/后缀

`Server` 返回玩家所在的服务器，与的是[`server-display`](/guide/config/cross-server-chat)相匹配;

`player` 返回玩家的名字

> [!WARNING]
> **`SERVER`**,**`MESSAGE`**，**`PlayName`** 这三个字段是必须的
> VeloChatX加载的时候会检测这三个占位符，如果缺少了就会使用缺省值：**`format:[{Server}]{PlayerName}: {Message}`**

> [!TIP]
> 占位符对大小写不敏感，但是推荐用小写。
> 本插件大部分文本是支持`Minecraft Chat Code`的，会对`§`和`&`颜色字符进行转义。

## 终端输出配置
`Velocity` 通常不会记录子服的聊天消息，这样子可以很好的隔离`proxy`和`backend`的部分消息，仅通过部分通道进行通信，以防止业务污染。

为了确保可以日志和终端统一记录聊天消息，本插件提供了终端聊天输出的配置。

该结构一般如下：
```yaml
log-text:
  enable: true
  convert: true
```
其中`convert` 表示是否要转换输出到终端的文本颜色(实现和游戏中一样的效果，日志中不会显示颜色代码，不影响游戏中输出的颜色)
> [!TIP]
> 本插件实现终端颜色转换是通过终端颜色转义字符实现的，通常情况下现代的终端体系是支持这些[ANSI](https://conemu.github.io/en/AnsiEscapeCodes.html)颜色代码的。
> 如果您的终端在转移颜色出现问题或者乱码,请将`convert`值设置为`false`.

## 提及配置 {#mention-config}
在配置文件下可以找到`mention-show-title`
`VeloChatX`通过接口向玩家发送提及消息的时候，可以通过该属性来控制提及的标题显示。

通常主标题和副标题可以在`message.yml`配置文件中以`mention-...`格式为开头的属性。
该提及的大标题文本显示一般会停留若干秒，并有一定的过渡动画，可以通过一下来调整：
```yaml
mention-show-title:
  enable: true
  time:
    fade-in: 1
    stay: 2
    fade-out: 1
```
`fade-in` 表示标题淡入显示的时间。

`stay` 表示该提交标题在淡入执行之后，完整显示的时间。

`fade-out` 表示提及标题在停留时间结束后，淡出到消失的时间。

> [!TIP]
> 所有的时间都是以`second`即秒为单位
> 该提及标题显示会占用玩家的主屏幕，来保住提醒作用
> 未来在接口改进后会映入音效提醒功能。

## 玩家PlayerTabList替换配置

为了确保全服的玩家信息显示保持一致，`VeloChatX`提供了一种替换默认的`PlayerTabList`的显示方式。
配置结构一般如下：
```yaml
tab-list:
  enable: true
  interval: 1000
  format: "{server}{prefix}{player}{Suffix}"
  header: "欢迎加入{proxy} 当前服务器: {server}"
  footer: "在线人数 §8{online}§r / §8{total_online}§r | Ping: §8{ping}"
```

`interval` 对应的刷新间隔,`milliseconds`(毫秒)为单位 输入0则表示被动刷新。被动刷新仅在任意玩家加入或离开服务器的时候生效。

`format` 对应的是每一个玩家的显示格式，同时支持`player`和`server`专用的占位符。

`header` 以及 `footer` 分别表示 `tablist` 的头部和尾部的显示格式，仅支持`server`专用占位符。

> [!TIP]
> 根据测试，`TabList`在玩家数量比较大的情况下，会占用一定的服务器性能(通常对高性能的服务器是不敏感的)
> 如果您的服务器有一定的性能需求，建议该值越大越好。

## 违禁词语屏蔽配置
为了限制违禁词语的转发，VeloChatX在消息转发给其他玩家之前会尝试检查聊天文本，以确保聊天文本是绿色，安全的。
该配置结构如下：

```yaml
ban-words:
  enable: true
  log-to-console: true
  words: "*,*,..."
```

`log-to-console` 表示会在终端显示该玩家的违禁词语，管理员可以通过违反的规则程度按标准进行处理。
    
`word` 表示可能出现的违禁词，当消息文本含有该违禁词，此消息会被禁止转发。每个违禁此之间是以英文逗号: “`,`” 进行分隔。