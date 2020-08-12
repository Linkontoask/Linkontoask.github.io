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
