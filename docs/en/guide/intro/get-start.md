# Quick Start

## Installation
### Prerequisites
* Configured [Velocity](https://docs.papermc.io/velocity/) (recommend v3.3.0+)
* [LuckPerms for Velocity](https://luckperms.net/download) (recommend v5.4+)
* [VeloChatX](https://github.com/Danburen/VeloChatX/releases) (recommend v2.0+)

### Installation Steps
1. Place `velochatx-x.x.x.jar` in Velocity's `plugins` folder
2. Start server - "Plugin loaded successfully" indicates proper operation
3. Stop server to edit configuration files

## File Structure
Initial generated structure:
```
.
├─broadcast.yml
├─config.yml
├─data.mv.db
└─message.yml
```
* `broadcast.yml`: Scheduled broadcast configuration
* `config.yml`: Main configuration file
* `data.mv.db`: Player data database (non-sensitive)
* `message.yml`: Custom message overrides

See configuration guides for details.

## Running
After configuration, start server normally.
Use commands for hot-reloading etc. See [Commands & Permissions](/en/reference/cmdsAndPerms).
