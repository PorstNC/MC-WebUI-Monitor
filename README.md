语言 | Language：简体中文 | [English](README.en.md)

# MC-WebUI-Monitor 使用说明

本项目基于 JavaScript 和 HTML 开发，提供 Minecraft 网页端启动及监控功能。

---

## 安装步骤

1. **克隆仓库**
   ```bash
   git clone https://github.com/PorstNC/MC-WebUI-Monitor.git
检查 Node.js 版本
推荐使用 Node.js 24，理论上 Node.js 22 及以上可用（最低支持版本未完全测试）。

2.**安装依赖**

双击 自动安装所需依赖包。install.bat

3.**游戏资源准备**

使用你的 Minecraft 启动器下载版本（或任意包含 MOD 管理器的对应版本）。1.21.8
将 文件夹下的 、 文件夹及游戏文件夹复制到MC-WebUI-Monitor项目目录下。游戏文件包含:assets libraries 1.21.8
注意：
如果使用带 Mod 的版本，其文件夹名通常为1.21.8-XXXXXX1.21.8 ，请重命名为1.21.8

## 启动说明
启动 WebUI
双击 。start-webui.bat
访问页面
启动浏览器访问 http://localhost:5173
启动游戏
按网页按钮操作并关注下方提示信息。
## 项目简介
启动游戏并通过ffmpeg.exe传输，快速MJPG流实现监视，已经不会出现刷新图片导致闪烁，给与无法监视Minecraft客户端的用户提供网页监视Minecraft图形界面服务(非服务器端)

## 其他说明
如有漏洞或问题，请及时反馈。

感谢使用 MC-WebUI-Monitor
