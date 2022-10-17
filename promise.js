
// 要实现上面代码中的功能，也是promise最基本的功能。
// 首先，需要创建一个构造函数promise，创建一个promisel类，
// 在使用的时候传入了一个执行器executor，executor会传入两个参数：
// 成功(resolve)和失败(reject)。之前说过，只要成功，就不会失败，
// 只要失败就不会成功。所以，默认状态下，在调用成功时，就返回成功态，调用失败时，返回失败态。

class Promise{
    constructor(executor){
        // 默认状态
        this.status = 'pending'
        this.value=undefined
        this.reason = undefined
        // 存放成功回调
        this.onResolveCallbacks=[]
        // 存放失败回调
        this.onRejectCallbacks=[]

        let resolve=(data)=>{
            if(this.status === 'pending'){
                this.value = data
                this.status='resolve'
                this.onResolveCallbacks.forEach(fn=>fn())
            }
        }

        let reject=(data)=>{
            if(this.status === 'pending'){
                this.reason = reason
                this.status='reject'
                this.onRejectCallbacks.forEach(fn=>fn())
            }
        }
        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
}