//数组的常见方法
// map (some,every,filter,forEach) es5
// find findIndex es6
// reduce 收敛 叠加
// for of()
let result = [1,2,3,4,5].reduce((prev,next,currentValue,ary)=>{
    console.log(prev,next,currentValue,ary)
    if(ary.length === currentValue -1){  
        return (prev + next) / ary.length
    }
    return prev + next
},0)
console.log(result)

let total = [{price:10},{price:20},{price:30}].reduce((prev,next,currentValue,ary)=>{
    // console.log(prev,next,currentValue,ary)
    return prev + next.price
},0)
console.log(total)

Array.prototype.myReduce = function(fn,prev){
    for(let i =0;i<this.length;i++){
        if(typeof prev === 'undefined'){
            prev = fn(this[i],this[i+1],i+1,this);
           ++i;
        }else{
            prev = fn(prev,this[i],i,this)
        }
    }
    return prev
}

let name = [1,2,3].myReduce((prev,next,prevIndex,ary)=>{
    console.log(prev,next,prevIndex,ary)
    return prev + next
})
console.log(name,'name')

let flat = [[1,2,3],[4,5,6]].reduce((prev,next,prevIndex,ary)=>{
    // console.log(prev,next,prevIndex,ary)
    return [...prev,...next]
})
console.log(flat,'flat')
// forEach 
Array.prototype.forEach = function(fn){
    for(let i=0;i<this.length;i++){
        fn(this[i],i)
    }
};
[1,2,3].forEach((item,index)=>{
    console.log(item,index)
})
// map 返回值,返回新数组
Array.prototype.map = function(fn){
    let arr = []
    for(let i=0;i<this.length;i++){
        arr.push(fn(this[i],i))
    }
    return arr
}
// filter 过滤 如果返回true表示留下 返回false表示删除
let filterArr = [1,2,3].filter(item=> item > 2)
console.log(filterArr,'filterArr')
// find 查找 他会返回查找的那一项，没有返回undefined 找到后就不会继续查找
let findArr = [1,2,3].find(item => item===5)
console.log(findArr,'findArr')
// some 找到后返回true, 找false可以使用every
let someArr = [1,2,3].some(item => item===2)
console.log(someArr,'someArr')
let everyArr = [0,1,2,3].every(item => {
    console.log(item)
    return item===0
})
console.log(everyArr,'everyArr')
// includes
console.log([1,2,3].includes(3))

// 将类数组转化成数组
// 常见的类数组有 HTMLCollection arguments
function a(){
    console.log(arguments)
    console.log(Array.from(arguments))
    console.log(eval(Array.from(arguments).join('+')))
}
a(1,2,3)
// of
// let ary = new Array(3)
let ary = Array.of(3)
console.log(ary)