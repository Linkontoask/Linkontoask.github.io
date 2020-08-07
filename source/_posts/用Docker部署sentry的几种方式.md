---
title: 用Docker部署sentry的几种方式
date: 2020-08-07 10:49:14
tags: docker sentry
---

# 用Docker部署sentry的几种方式

`sentry`是什么呢？我在Github上找到了这个答案。  
Real-time crash reporting for your web apps, mobile apps, and games.

市场中有很多类似的解决方案，为什么要选择 `sentry` 来做为我们的应用程序BUG检测的解决方案。

+ 开源
+ 社区比较完善
+ 云上有免费额度

## 第一种，使用官方的 `onpremise`

[onpremise github](https://github.com/getsentry/onpremise)

运行sentry之前，你需要满足一下环境。

+ 保证你的服务器内存大于2G
+ Docker 17.05.0+
+ Compose 1.23.0+

如果你都满足了，那么接下来就是开始安装了。

+ 我们将项目clone下来。
`git clone git@github.com:getsentry/onpremise.git`
+ 运行`install.sh`
`bash install.sh`
+ 使用`docker-compoes`后台运行容器
`docker-compoes up -d`

至此，请使用`IP:9000`连接进行访问，我们可以正常访问sentry的后台。

但是你会发现，**用户名和密码**在哪里？接下来，我们需要创建，我们键入`docker-compose run --rm web upgrade`，按照提示输入用户名和密码。


## 第二种，使用命令行的形式部署

我们找到Docker的HUB，[sentry hub](https://hub.docker.com/_/sentry/)，然后我们按照上面的操作步骤下来，不过注意的是，执行第5步的时候没有将9000端口映射出来，我们需要稍微变更一下。

+ `docker run -d --name sentry-redis redis`
+ `docker run -d --name sentry-postgres -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=sentry postgres`
+ `docker run --rm sentry config generate-secret-key` （保存这里生成的key）
+ `docker run -it --rm -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-postgres:postgres --link sentry-redis:redis sentry upgrade` （这里会提示你输入用户名/邮箱和密码）
+ `docker run -d --name my-sentry -p 9000:9000 -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-redis:redis --link sentry-postgres:postgres sentry` （注意-p参数）
+ `docker run -d --name sentry-cron -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-postgres:postgres --link sentry-redis:redis sentry run cron`
+ `docker run -d --name sentry-worker-1 -e SENTRY_SECRET_KEY='<secret-key>' --link sentry-postgres:postgres --link sentry-redis:redis sentry run worker`

接下来访问`IP:9000`，输入你第4步键入的邮箱和密码即可登录后台管理系统。