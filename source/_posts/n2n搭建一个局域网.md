---
title: n2n搭建一个局域网
date: 2020-07-07 16:02:22
tags: n2n nat linux
---

# n2n 搭建局域网（最主要还是可以打游戏）

我们可以利用固定的公网IP，在内部搭建一个虚拟的网络服务，用我们的电脑连上去即可组成局域网。

### 前提条件

+ 可访问的公网IP以及`linux`服务器
+ 一台或多台客户端，能正常上网即可（游戏好友）

### 大致步骤如下

+ docker容器安装`supernode`
  + 具体命令 `docker run --rm -d -p 5645:5645/udp supermock/supernode`
+ 非docker容器安装`supernode`
  + `git clone https://github.com/ntop/n2n.git`
  + `./autogen.sh`
  + `./configure`
  + `sudo make install`
+ 更多系统安装`n2n`请移步[https://www.sayers.top/delete/n2nvpn.html](https://www.sayers.top/delete/n2nvpn.html)
+ 在客户端上安装`n2n client`
  + **windows**
    + 下载[http://www.vpnhosting.cz/n2nguien.exe](http://www.vpnhosting.cz/n2nguien.exe)
    + 配置服务器IP地址以及端口
    + 配置局域网IP，用户名和密码。用户名和密码用于组，也就是说其他人使用相同的用户名和密码就可以组建局域网。`advanced`中有对应的版本设置，v1版本是明文传输数据，所以你们在安装服务器`supernode`时自己区分用哪一个版本。
    + 确定后会弹出窗口让你重启程序，需要在右下角右键n2n，选择quit。
    + 再次打开`n2ngui.exe`时会让你同意是否用于公用网络代表服务已经成功启动。

具体配置如图  
![1594114053_1_.jpg](https://i.loli.net/2020/07/07/OLBK3q4zyaXDGf9.png)

成功后会启动一个虚拟适配器，IP为`n2ngui.exe`设置的IP  
![1594114161_1_.jpg](https://i.loli.net/2020/07/07/oyKE3dlXf42s8IC.png)


### 部分问题

+ ping不通局域网其它机器
  + 请检查目标机器的防火墙设置。
+ 连接不上服务器
  + 请用管理员权限，进入到n2n安装目录，运行`edge -a 192.168.5.2 -c link -k link -l xxx.xxx.xxx.xxx:xxxx`，如果发生错误会发生`Registering with supernode`错误，如果是v2版本则会提示`WARNING:Supernode not responding - moving to 0 of 1`
  + 请检查服务器端的防火墙端口是否打开，`UDP`哦！

部分参考连接：  

+ [https://github.com/ntop/n2n](https://github.com/ntop/n2n)
+ [https://hub.docker.com/r/supermock/supernode](https://hub.docker.com/r/supermock/supernode)
+ [http://www.lucktu.com/archives/751.html](http://www.lucktu.com/archives/751.html)
+ [https://www.sayers.top/delete/n2nvpn.html](https://www.sayers.top/delete/n2nvpn.html)
