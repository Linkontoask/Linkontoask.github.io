---
title: promise-allsettled
date: 2020-06-11 15:45:12
tags: Promise
---

### Promise.allSettled 的应用场景与原理

MDN: 该`Promise.allSettled()`方法返回一个在所有给定的promise已被决议或被拒绝后决议的promise，并带有一个对象数组，每个对象表示对应的promise结果。

#### 应用场景

`allSettled`只有一个状态，他会等待所有promise完成或拒绝后`有序`的调用then方法，参数为一个任务的结果和状态。

返回结果示例：
``` json
{
    "status": "fulfilled",
    "value": "success"
},
{
    "status": "rejected",
    "reason": "failed"
}
```

它和`all`最大的不同在于，`all`只要其中一个任务发生错误会立即返回，`all`没办法捕获到执行成功的结果。

在一些非关联性的任务下，可以并发去执行并取得结果进行后续处理。比如，爬取一些页面数据的时候，每个页面都是独立的个体，互不关联，我们可以先抓取需要爬取的页面集合，进行处理后并发去执行请求或者其它异步任务。

`allSettled`目前处于TC39第四阶段草案，具体的实现进度可以参考[这里](https://test262.report/features/Promise.allSettled)

#### 原理

和`all`相同，都返回一个Promise，只是发生错误的时候并不会抛出异常，而会依次收集这个错误，在等待所有任务执行完成后返回。
