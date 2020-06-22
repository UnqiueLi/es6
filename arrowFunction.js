// 箭头函数
// 没有function的关键字
// 效果韩和大括号之间有个箭头
// 如果参数是一个可以省略小括号
// 如果直接返回时对象，需要（）包裹
// function middeware(store){
//     return function dispatch(params){
//         return function action(params){}
//     }
// }
// 通过bind方式绑定this、call、apply
// let middeware = store=>dispatch=>action=>{}
function fn(a){ return a}
// let fn =(a)=>{return a }
// let fn =a=> a