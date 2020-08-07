---
title: 使用webpack运行vue3需要准备的工作
date: 2020-07-30 15:08:53
tags: vue webpack
---

# 使用webpack运行vue3需要准备的工作

vue-next已经在rc阶段，周边社区已经基本完善，等待最后发布一个稳定的版本即可投入在小项目中使用。

## 准备哪些webpack插件？

+ HtmlWebpackPlugin  
做前端项目最基本的一个html载体。
+ vue-loader@next
编译.vue文件的插件，需要安装next版本。
+ vue@next
vue3的rc版，和vue2最大的不同就是分离了不同的功能包，比如可以分开导入reactivate、compiler-core。
+ babel
可以使用最新的语法，有很多插件可以帮助我们提高开发效率。
+ ts-loader
支持typescript语法

准备一个babel插件以支持jsx
+ @ant-design-vue/babel-plugin-jsx

