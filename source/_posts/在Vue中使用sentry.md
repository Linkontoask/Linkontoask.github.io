---
title: 在Vue中使用sentry
date: 2020-08-07 11:42:15
tags: vue sentry
---

# 在Vue中如何使用sentry？

sentry支持多个平台，在新建项目的时候可以发现支持数十种平台。以vue-next项目为例

在入口引入`@sentry/browser`和`@sentry/integrations`这两个库，`raven-js`主要是做自定义上传

```js
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
import Raven from 'raven-js'
import {createApp, h} from 'vue'
import APP from './APP.vue'

const app = createApp({
  render() {
    return h(APP)
  }
})

app.mount('#app')

let configSentry = {
  dsn: '<dsn>',
  integrations: [new Integrations.Vue({ Vue: app, attachProps: true })],
  debug: true,
  beforeSend(event, hint) {
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  }
}

if (process.env.NODE_ENV === 'production') {
  delete configSentry.debug
}

Sentry.init(configSentry)

Raven.config('<dsn>')
```

这个时候在sentry控制台中能看到错误日志，但是我们项目是经过webpack编译过后的代码，没有办法阅读。这个时候可以利用`@sentry/webpack-plugin`这个webpack插件将生成的map文件上传至控制台，然后就可以在issues中看到详细的错误日志。

具体使用实例，更多详细配置请移步[github](https://github.com/getsentry/sentry-webpack-plugin)
```js
const SentryPlugin = require('@sentry/webpack-plugin')
module.exports = {
  // ... 其它配置
  plugins: [
    new SentryPlugin({
      include: 'dist',
      release: '1.0.1',
      debug: true
    })
  ]
}
```

这个时候需要一些配置，告诉插件我们sentry的地址，我们在项目中创建一个`.sentryclirc`，当然，这个文件也可以创建在项目的上一层目录或这根目录，因为插件会以当前目录为基础，一层一层的往上找。
```
[auth]
token = <token>
dsn = <dsn>

[defaults]
url = <url>
org = sentry
project = test
```

auth:   
+ token: 上传凭证，在用户下可以创建一个可读可写的项目token
+ dsn: 用于确认上传地址和凭证的`uri`，组成部分`{PROTOCOL}://{PUBLIC_KEY}:{SECRET_KEY}@{HOST}/{PATH}{PROJECT_ID}`

defaults:   
+ url: sentry的地址
+ org: 组织名称
+ project: 项目名称i