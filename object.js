// Object.assign()
let name = {name:'qwer'}
let age = {age:'6'}
let obj = Object.assign(name,age) //浅拷贝
console.log(obj)
console.log({...name,...age})
// _proto_ 链
// 再es6中可以在对象内直接操作_proto_
let object1 = {name:'qwer'}
let object2 = {age:'6'} 
object1._proto_=object2
Object.setPrototypeOf(object1,object2)
console.log(object1._proto_)
console.log(Object.getPrototypeOf(object1))
