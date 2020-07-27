---
title: vue2.x与vue-next速度对比（浏览器侧）
date: 2020-07-27 17:55:58
tags: vue
---

# vue2.x与vue-next速度对比（浏览器侧）

测试环境：
+ Chrome 84.0.4147.89 (x64)
+ windows10

测试步骤：
+ 使用内置的`h`渲染。
+ 使用五层VNode，只包裹文本节点，遍历10000次。

- vue2.x 测试代码
```javascript
new Vue({
    el: '#root',
    render(h) {
        let index = 5, old = h('div', null, 'Link')

        while (index > 0) {
            old = h('div', null, [old])
            index--
        }
        
        const a = Array(10000).fill(0).map(i => {
            return old
        })

        return h('div', {}, a)
    },
    created() {
        console.time('render')
    },
    mounted() {
        console.timeEnd('render')
    }
})
```

- vue-next 测试代码
```javascript
const app = createApp({
    setup() {

      console.time('render')
      onMounted(() => {
        console.timeEnd('render')
      })

      let index = 5, old = h('div', {}, 'Link')

      while (index > 0) {
        old = h('div', {}, old)
        index--
      }

      const a = Array(10000).fill(0).map(i => {
        return old
      })

      return () => h('div', {}, a)
    },

}).mount('#root')
```

## 最终结果

+ vue2.x `331.082275390625ms`
+ vue-next `267.6630859375ms`

注意：以上数据仅为平均数据（5层VNode），只能说明`vue`版本升级后能够提高渲染速度。
