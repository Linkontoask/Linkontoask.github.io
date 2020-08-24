---
title: 什么是Promises/A+？如何实现一个then链式调用？
date: 2020-08-24 15:59:24
tags: Promise
---

# 什么是Promises/A+规范？

是Promise的一个非常稳定标准，用于给实现该标准的一个说明。他规范了then方法的行为，使得同一份代码在不同平台也能拥有相同效果。

[https://promisesaplus.com/](https://promisesaplus.com/)这里有一个详细的解释。

# 实现then链式调用

Promise语法

```javascript
new Promise((resolve, reject) => {} /* executor */  );
```

## executor
executor是带有 `resolve` 和 `reject` 两个参数的函数 。Promise构造函数执行时立即调用 `executor` 函数， `resolve` 和 `reject` 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回所建promise实例对象前被调用）。`resolve` 和 `reject` 函数被调用时，分别将promise的状态改为`fulfilled`（完成）或`rejected`（失败）。executor 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成`fulfilled`，要么调用 reject 函数将 promise 的状态改为 `rejected`。如果在executor函数中抛出一个错误，那么该promise 状态为`rejected`。executor函数的返回值被忽略。

```javascript
new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(100)
        }, 0)
    }
).then(v => {
    console.log(v) // 100
}, e => {
    console.log(e) //
})
```

上面是一个经典的Promise例子，使用`setTimeout`延迟将100返回给`then`方法使用。那么，我们为了实现上面的功能，应该提前做哪些准备呢？

+ executor立即执行，那么我们需要在new一个实例的时候，直接执行executor，并传入`resolve`，`reject`。
+ then方法返回一个Promise，接收两个参数，`promise.then(onFulfilled?: Function, onRejected?: Function)`，`onFulfilled`和`onRejected`必须为函数，分别在成功或失败后调用。
+ `resolve`或`reject`的值需要传递给下一个`then`方法中的`onFulfilled`或`onRejected`。
+ Promise只有一个状态，初始状态为`pending`。`fulfilled`/`rejected`状态为最终状态，不能转换为其它状态。

有了上述准备，接下来使用伪代码实现一个demo。（使用伪代码的原因是因为在给别人演示或面试时可以提高效率，避免在细节上花太多的时间）

以下为ES6的代码，ES5可以使用function和prototype实现。
```javascript
class xPromise {

    constructor(executor) {
        const resolve = value => {
            // ...
        }
        const reject = reson => {
            // ...
        }
        executor(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        return new xPromise((resolve, reject) => {
            // ...
            try {
                onFulfilled(this.value)
            } catch(e) {
                onRejected(e)
            }
        })
    }
}

const promise1 = new xPromise((resolve, reject) => {
    resolve(100)
})
promise1.then(v => {
    console.log(v) // 100
})
console.log('end')

/*
 * 控制台输出：
 * 100
 * end
 */
```

为什么先输出100？再输出end呢？

原因在于then方法中执行`onFulfilled`/`onRejected`为同步执行，那么，我们将`then`方法稍加修改。

```javascript
then(onFulfilled, onRejected) {
    return new xPromise((resolve, reject) => {
        // ...
        try {
            const onFulfill = v => {
                process.nextTick() // This can be implemented with either a “macro-task” mechanism such as setTimeout or setImmediate, or with a “micro-task” mechanism such as MutationObserver or process.nextTick
            }
            onFulfill(this.value)
        } catch(e) {
            const onReject = v => {
                process.nextTick()
            }
            onReject(e)
        }
    })
}

/*
 * 控制台输出：
 * end
 * 100
 */
```

现在输出已经符合预期，那么我们看看最初那个经典的例子。

```javascript
new xPromise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(100)
        }, 0)
    }
).then(v => {
    console.log(v) // 100
}, e => {
    console.log(e) //
})

/*
 * 控制台输出：
 */
```

怎么回事，我们的输入呢？很明显，没有进入到`then`方法中，为什么会产生这样子的效果，原因时因为执行`executor`时，使用了`setTimeout`这个定时器函数，那我们可以换一种思路，在`then`方法中不直接调用传递进来的参数，而是使用一个数组将参数保存下来，在`resolve`中再循环执行这个数组中的函数。那应该怎么改呢？

构造函数中初始化两个数组，分别保存`onFulfilled`/`onRejected`
```javascript
class xPromise {
    constructor(executor) {
        this.resolveCallback = []
        this.rejectCallback = []
        const resolve = value => {
            // ...
            this.resolveCallback.forEach(f => f())
        }
        const reject = reson => {
            // ...
            this.rejectCallback.forEach(f => f())
        }
        executor(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        return new xPromise((resolve, reject) => {
            const onFulfill = v => {
                process.nextTick() // This can be implemented with either a “macro-task” mechanism such as setTimeout or setImmediate, or with a “micro-task” mechanism such as MutationObserver or process.nextTick
            }
            const onReject = v => {
                process.nextTick()
            }
            this.resolveCallback.push(onFulfill)
            this.rejectCallback.push(onReject)
        })
    }
}

console.log('start')
new xPromise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(100)
        }, 1000)
    }
).then(v => {
    console.log(v) // 100
}, e => {
    console.log(e) //
})
console.log('end')

/*
 * 控制台输出：
 * start
 * end
 * -> 1s后输出 <100>
 */
```

到现在为止，我们实现了`then`方法，那么如何在链式调用时穿透值呢？其实很简单，我们只需要在`resolve`时候把值保存起来，在callback遍历时传递进去即可。不过，我们还需要注意`then`方法可能会返回一个Promise，所以，在`onFulfill`/`onReject`中需要使用`instanceof`判断函数执行的返回值是否为Promise。

```javascript
then(onFulfilled, onRejected) {
    return new xPromise((resolve, reject) => {
        const onFulfill = v => {
            const fn = () => {
                try {
                    /*
                     * 使用 instanceof 判断，然后调用then方法使用resolve传递出去
                     */
                    const result = onFulfilled(v)
                    if (result instanceof xPromise) {
                        result.then(v => {
                            resolve(v)
                        })
                    }
                    // ...
                } catch (e) {
                    // ...
                }
            }
            process.nextTick(fn)
        }
        this.resolveCallback.push(onFulfill)
    })
}

console.log('start')
new xPromise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve(100)
        }, 1000)
    }
).then(v => {
    console.log(v)
    return new xPromise(r => {
        setTimeout(() => {
            resolve(1000)
        }, 1000)
    })
}, e => {
    console.log(e) //
}).then(v => {
    console.log(v)
})
console.log('end')

/*
 * 控制台输出：
 * start
 * end
 * -> 1s后输出 <100>
 * -> 再等1s后输出 <1000>
 */
```

现在已经实现了大部分功能，我们再具体细化一下实现`all`/`resolve`/`reject`(reject的值必须为Error实例)

```javascript
class xPromise {
    static all(promiseArray) {
        return new xPromise((resolve, reject) => {
            promiseArray.forEach((promise, index) => {
                promise.then(v => {
                    if ((result.length - 1) === index) {
                        resolve(result)
                    }
                }, e => {
                    reject(e)
                })
            })
        })
    }

    static resolve(value) {
        return new xPromise((resolve, reject) => {
            resolve(value)
        })
    }

    static reject(reson) {
        return new xPromise((resolve, reject) => {
            reject(reson)
        })
    }
}

const promise1 = new xPromise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Fail1'))
    }, 500)
})
const promise2 = new xPromise(resolve => {
    setTimeout(() => {
        resolve('promise2')
    }, 1000)
})
xPromise.all([
    promise2,
    promise1,
]).then(v => {
    console.log(v.join(','))
}).catch(e => {
    console.log(promise1.status)
    console.log(promise2.status)
    console.log(e)
    return 100
}).then(v => {
    console.log('then', v)
})

/*
 * 控制台输出：
rejected
pending
0.5s后输出：Error: Fail1
    at Timeout._onTimeout (D:\demo\vue-next\Promise.js:174:16)
    at listOnTimeout (internal/timers.js:549:17)
    at processTimers (internal/timers.js:492:7)
then 100
 */
```
