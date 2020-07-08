---
title: centos中service的配置-踩坑
date: 2020-07-08 18:03:10
tags: centos systemctl-service
---

### 第一个坑

`ExecStart`参数中不能使用相对路径，必须使用绝对路径。可以设置`WorkingDirectory`的值来改变工作目录。

比如我在bash中使用`python3 manage.py runserver 0.0.0.0:8000`，而在`ExecStart`中使用`python3 manage.py runserver 0.0.0.0:8000`会报错。

### 第二个坑

`[Service]`中的`Type`的值必须要符合自己的应用程序，我的应用程序为api服务，所以将其设置为默认值`simple`。[https://www.freedesktop.org/software/systemd/man/systemd.service.html](https://www.freedesktop.org/software/systemd/man/systemd.service.html)

如果服务成功启动，会有一下日志。  
在控制台中`systemctl status xxxx.service`
```log
sys-albums.service - xxxx.service
   Loaded: loaded (/usr/lib/systemd/system/sys-xxxx.service; disabled; vendor preset: disabled)
   Active: active (running) since Wed 2020-07-08 17:43:12 CST; 21min ago
 Main PID: 8283 (python3)
   Memory: 53.1M
   CGroup: /system.slice/sys-xxxx.service
           ├─8283 /usr/bin/python3 manage.py runserver 0.0.0.0:xxxx
```
