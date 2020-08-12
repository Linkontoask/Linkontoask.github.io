---
title: 使用docker打包前端应用(webpack)
date: 2020-08-08 21:29:05
tags: docker image
---

# 使用docker打包前端应用(webpack)

使用docker部署前端应用时，我们要清楚用docker能给我带来什么，以及使用docker带来的成本。

用docker打包前端应用时，需要消耗的资源：
+ 学习docker，搭建docker基本运行环境（windows、linux）
+ 了解docker基本原理，以及dockerfile的语法
+ 打包之后的体积优化（非必须）

用docker打包前端应用时，带来的好处：
+ 可以实现应用的网络隔离
+ 方便集成到CI工具中
+ 形成封闭的运行环境，不会因为nginx等web服务器漏洞导致被攻击
+ layer缓存，如果没有发生依赖修改的情况下，可以直接使用缓存，提高打包iamge效率
+ 可移植，方便部署到windows、linux或者mac系统上
+ 部署层面的版本控制
