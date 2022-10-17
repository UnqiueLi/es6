
// 要实现上面代码中的功能，也是promise最基本的功能。
// 首先，需要创建一个构造函数promise，创建一个promisel类，
// 在使用的时候传入了一个执行器executor，executor会传入两个参数：
// 成功(resolve)和失败(reject)。之前说过，只要成功，就不会失败，
// 只要失败就不会成功。所以，默认状态下，在调用成功时，就返回成功态，调用失败时，返回失败态。

class Promise{
    constructor(executor){
        // 默认状态
        this.status = 'pending'
        // 成功的值
        this.value=undefined
        // 失败的原因
        this.reason = undefined
        // 存放成功回调
        this.onResolveCallbacks=[]
        // 存放失败回调
        this.onRejectCallbacks=[]

        let resolve=(data)=>{
            if(this.status === 'pending'){
                this.value = data
                this.status='fulfilled'
                // 一旦resolve执行，调用成功数组的函数
                this.onResolveCallbacks.forEach(fn=>fn())
            }
        }

        let reject=(data)=>{
            if(this.status === 'pending'){
                this.reason = reason
                this.status='rejected'
                this.onRejectCallbacks.forEach(fn=>fn())
            }
        }
        try {
            executor(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }

    /*
    当状态state为fulfilled，则执行onFulfilled，传入this.value。当状态state为rejected，则执行onRejected，传入this.reason
    onFulfilled,onRejected如果他们是函数，则必须分别在fulfilled，rejected后被调用，value或reason依次作为他们的第一个参数
    **/
    then(onFulfilled,onRejected){
        if(this.status === 'fulfilled'){
            onFulfilled(thi.value)
        }
        if(this.status === 'rejected'){
            onRejected(this.reason)
        }

        if(this.status === 'pending'){
            this.onResolveCallbacks.push(()=>{
                onFulfilled(this.value)
            })

            this.onRejectCallbacks.push(()=>{
                onRejected(this.value)
            })
        }
    }
}

