# 快速开始

## 安装插件

### 前置准备
* 配置好的 [Velocity 服务端](https://docs.papermc.io/velocity/) 推荐3.3.0版本及以上
* [LuckPerms for Velocity](https://luckperms.net/download) 插件 推荐5.4+
* [VeloChatX](https://github.com/Danburen/VeloChatX/releases) 本插件 推荐2.0+
### 安装指南
1. 将下载好的 VeloChatX 插件的 `velochatx-x.x.x.jar` 包放到 Velocity 服务器的`plugin`
文件夹下
2. 运行您的服务器，等待几秒至几分钟，当您看到`“成功加载本插件”`即插件运行正常
3. 您可以尝试关闭服务器，对本插件的配置文件进行编辑。

## 插件生成文件结构
通常首次运行生成的目录结构如下，如果与该目录不匹配，则您可能使用的是2.0或更低版本，
推荐您使用2.0+的版本；也有可能是插件的文件不完整，请重新下载。
```
.
├─broadcast.yml
├─config.yml
├─data.mv.db
└─message.yml
```
* `broadcast.yml` 存储了定时广播的配置，您可以在此文件夹中选择性的配置您的服务器定时广播
* `config.yml` 是本插件的主要配置文件，绝大部分的配置在本文件中进行修改。
* `data.mv.db` 存储的是玩家的信息的数据库文件，一般存储玩家的UUID，屏蔽的信息等。(无敏感信息)，
切勿删除本文件，否则所有玩家的屏蔽玩家的信息将丢失
* `message.yml` 本文件存储的是对一些自定义消息的修改，可以在`config.yml`设置是否按照
全局设置或者本地设置，若这是全局消息，则会使用此文件中的配置文件消息，如果是本地，则会使用
内置的玩家消息（根据玩家所属地的国籍显示对应的语言消息）

详情的配置请见[主配置](/guide/config/main),[跨服配置](/guide/config/cross-server-chat),
[被动广播配置](/guide/config/passive-broadcast),[定时广播配置](/guide/config/active-broadcast)
## 启动并运行
在您配置好本插件之后，即可以直接启动服务器并运行。您可以通过一系列指令进行配置热重载等操作。
在使用指令过程中，您可以参考[指令和权限](/reference/cmdsAndPerms)
