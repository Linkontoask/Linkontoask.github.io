---
title: docker不同容器中的网络通信
date: 2020-08-10 16:52:30
tags: docker
---

# docker不同容器中的网络通信

在docker中我们可以借助`network`这个子级命令，它提供容器之间的通信，分为以下5种驱动模式。

+ bridge: 默认的网络驱动模式。如果不指定驱动程序，bridge 便会作为默认的网络驱动模式。当应用程序运行在需要通信的独立容器 (standalone containers) 中时，通常会选择 bridge 模式。
+ host：移除容器和 Docker 宿主机之间的网络隔离，并直接使用主机的网络。host 模式仅适用于 Docker 17.06+。
+ overlay：overlay 网络将多个 Docker 守护进程连接在一起，并使集群服务能够相互通信。您还可以使用 overlay 网络来实现 swarm 集群和独立容器之间的通信，或者不同 Docker 守护进程上的两个独立容器之间的通信。该策略实现了在这些容器之间进行操作系统级别路由的需求。
+ macvlan：Macvlan 网络允许为容器分配 MAC 地址，使其显示为网络上的物理设备。 Docker 守护进程通过其 MAC 地址将流量路由到容器。对于希望直连到物理网络的传统应用程序而言，使用 macvlan 模式一般是最佳选择，而不应该通过 Docker 宿主机的网络进行路由。
+ none：对于此容器，禁用所有联网。通常与自定义网络驱动程序一起使用。none 模式不适用于集群服务。

配置实例：
```yaml
networks:
  mongo:
    name: mongo
    driver: bridge
```

我们可以通过`mongo`这个网络驱动，为不同容器提供网络通信。

docker-compose.yml
```yaml
version: '3.8'
networks:
  mongo:
    name: mongo
    driver: bridge
services:
  db:
    image: mongo
    ports:
      - 27017:27017
    networks:
      - mongo
  wait:
    build: .
    networks:
      - mongo
    depends_on:
      - db
    command: /bin/sh wait.sh
```
在yml配置文件中，我们配置了一个wait容器和db容器，他们使用`mongo`网络环境。

下面是`Dockerfile`配置文件，基于`alpine`（[Alpine Linux](https://alpinelinux.org/) is a Linux distribution built around [musl libc](https://www.musl-libc.org/) and [BusyBox](https://www.busybox.net/)）
Dockerfile
```
FROM alpine

WORKDIR /app

ADD wait.sh /app
```

`wait.sh`就是让脚本暂停，方便我们bash时进行操作。
```sh
#!/usr/bin/env bash

sleep 1000
```

在容器运行过程中我们可以使用`docker exec -it <docker id> ping db`命令，看看能否正常与db容器通信，然后再使用`docker exec -it <docker id> ping db:27017`看看端口是否开启。
```
λ docker exec -it a0efed4a8d9b ping -c 2 db
PING db (172.19.0.2): 56 data bytes
64 bytes from 172.19.0.2: seq=0 ttl=64 time=0.169 ms
64 bytes from 172.19.0.2: seq=1 ttl=64 time=0.096 ms

--- db ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.096/0.132/0.169 ms
```
这个时候我们运行一下`docker network ls`，看看运行的`network`的ID，然后再输入`docker network inspect <network id>`
```
λ docker network inspect <network id>
[
    {
        "Name": "mongo",
        "Id": "92d630eadafa764dd40e3145b76f99d700f1d4a198d9ef2a8d73db440c020efd",
        "Created": "2020-08-10T09:06:59.2047684Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.19.0.0/16",
                    "Gateway": "172.19.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": true,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "82025ba1fe6836858287fe4841b377744ab78a0adf83400b21736a4deb353edf": {
                "Name": "network_db_1",
                "EndpointID": "cb4701b86ad30d3731fb92c58279bc6fd42cef5725254ecfab218d2ee8f45523",
                "MacAddress": "02:42:ac:13:00:02",
                "IPv4Address": "172.19.0.2/16",
                "IPv6Address": ""
            },
            "a0efed4a8d9b2df37d55e17eb77f9955481c7ff397bd7a3521a738c64edb3383": {
                "Name": "network_wait_1",
                "EndpointID": "1f20117a0cbda05b26b6479a1681050a5560147875cc467daa18bf420c8074fe",
                "MacAddress": "02:42:ac:13:00:03",
                "IPv4Address": "172.19.0.3/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {
            "com.docker.compose.network": "mongo",
            "com.docker.compose.project": "house",
            "com.docker.compose.version": "1.26.2"
        }
    }
]
```
上面我们可以看到有两个容器在这个网络环境中，`Containers`对象中包含了这两个容器的网络状态。
+ Name：容器名称
+ MacAddress：容器的MAC地址
+ IPv4Address：容器的IPV4地址
+ IPv6Address：容器的IPV6地址

上述就是使用`docker-compose.yml`进行`network`通信。非`docker-compose`的形式请参考[https://docs.docker.com/network/bridge/](https://docs.docker.com/network/bridge/)

## docker建立用户网络

`docker network create my-net`，创建一个名为`my-net`的网络，然后再使用`docker network connect my-net my-nginx`将已经运行的`my-nginx`容器加入到`my-net`网络。  
也可以使用下面命令，在容器启动的时候添加`--network`参数，将容器运行在特定的网络环境下
```shell
$ docker create --name my-nginx \
  --network my-net \
  --publish 8080:80 \
  nginx:latest
```
如果想断开网络，可以使用`docker network disconnect my-net my-nginx`

## nginx代理到其它容器中的端口上

在前后端分离的背景下，我们使用`nginx`提供web服务。使用docker部署nginx时，会遇到代理到不同容器中端口的问题，下面就讲讲如何去解决这一个问题。

第一种，我们使用`host`网络模式，这会让nginx容器置身于主机环境下，共用相同的网络。  
第二种，我们使用容器名进行桥接。
先看看`docker-compose.yml`配置。
```yaml
version: '3.8'
services:
  dashboard:
    image: mongo
  nginx:
    image: nginx
```
这里是`nginx.conf`配置。
```
server {
    listen 80;
    server_name _;

    location /api {
        proxy_set_header        X-Real_IP       $remote_addr;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header        X-NginX-Proxy   true;
        proxy_set_header        Host            $http_host;
        proxy_set_header        Upgrade         $http_upgrade;
        proxy_pass              http://dashboard:9090/; # <容器名>
    }
}
```
