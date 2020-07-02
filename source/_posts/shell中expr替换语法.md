---
title: shell中expr替换语法
date: 2020-07-02 15:08:40
tags: shell
---

# expr

`expr`命令是一个手工命令行计数器，用于在UNIX/LINUX下求表达式变量的值，一般用于整数值，也可用于字符串。

`expr`有以下几种算术：

+ 计算字串长度
```sh
# expr
expr length "this is a test"
# 替换语法
str="this is a test"
echo ${#str}
```
+ 抓取字串
```sh
# expr
expr substr "this is a test" 3 5
# 替换语法
str="this is a test"
echo ${str:2:5} # 注意是从0开始
```
+ 抓取第一个字符数字串出现的位置
```sh
# expr
expr index "sarasara" a
# 替换语法
str="this is a test"
awk -v a="$str" -v b="a" 'BEGIN{print index(a,b)}'
```
+ 整数运算
```sh
# expr
expr 14 % 9
# 替换语法
result=$(( 14 % 9 ))
echo "$result"
```
