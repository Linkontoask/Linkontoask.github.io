---
title: mongoDB-windows-服务安装失败
date: 2020-06-03 16:26:28
tags:
---

### 安装环境：

+ windows 10/7

错误截图

![image.png](https://i.loli.net/2020/06/03/kStmp6Xbi1nT3IY.png)

### 解决方案：

删除`安装目录/bin/mongod.cfg`下的`mp:`配置，然后重试即可。

最终配置文件为：

![image.png](https://i.loli.net/2020/06/03/baAi138BLgOdMSF.png)
