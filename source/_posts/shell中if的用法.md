---
title: shell中if的用法
date: 2020-07-02 14:12:10
tags: shell
---

# shell

在部署项目时，会遇到一些环境问题，或者在一些重复性的劳动时，可以使用`shell`帮我们完成这些事情。

### 基本用法

create.sh
```sh
#!/bin/sh

page=$1

if [ "$page" != "" ]; then
    npx hexo new "$page"
else
    echo "please file name"
fi
```

输入`sh create.sh page`后会使用npx临时安装一个hexo.cmd，创建一个`page.md`在`hexo`项目中。[hexo](https://hexo.io/zh-cn/docs/)  
如果是输入的`sh create.sh`，没有在后面跟上参数，那么将会输入一个`please file name`。

### 高级用法

```sh
#!/bin/sh

a=10
b=20

if [ $a == $b ]
then
   echo "a is equal to b"
elif [ $a -gt $b ]
then
   echo "a is greater than b"
elif [ $a -lt $b ]
then
   echo "a is less than b"
else
   echo "None of the condition met"
fi
```
