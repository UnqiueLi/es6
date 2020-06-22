// es6 模板字符串 特殊字符串
// 模板字符串取代了原有的字符串拼接功能
// let name = '明明'
// let age = 9
// // hello~明明今年9岁了
// let str = `hello~${name}今年${age}岁了`
// str = str.replace(/\$\{([^}]*)\}/g,function(){
//     console.log(arguments)
//     return eval(arguments[1])
// })
// console.log(str)

let name = 'zfpx';
let age = 9;
function jw(){
    console.log(arguments,'arguments')
    let strings= arguments[0]
    // Array.protitype.slice.call()
    let values = [].slice.call(arguments,1)
    let str = ''
    for(let i =0;i<values.length;i++){
        str += `${strings[i]}*${values[i]}*`
    }
    str += strings[strings.length -1]
    return str

}
let str = jw`hello~${name}今年${age}岁了`
console.log( str)
// includes 是否包含
// startsWith 以xxx开头
// endsWith 以xxx结尾
// padStart padEnd 补全