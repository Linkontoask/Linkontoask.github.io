---
title: mongoDB-windows-服务安装失败
date: 2020-06-03 16:26:28
tags:
---

### 安装环境：

+ windows 10/7

错误截图

![](https://img-blog.csdn.net/20180831183856795?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIwMDg0MTAx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 解决方案：

删除`安装目录/bin/mongod.cfg`下的`mp:`配置，然后重试即可。

最终配置文件为：

![image.png](https://i.loli.net/2020/06/03/baAi138BLgOdMSF.png)
