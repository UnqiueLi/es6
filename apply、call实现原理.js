
function getGlobalObject(){
    return this
}

function generateFunctionCode(argsArrayLength){
    var code = 'return arguments[0][arguments[1]](';
    for(var i = 0; i < argsArrayLength; i++){
        if(i > 0){
            code += ',';
        }
        code += 'arguments[2][' + i + ']';
    }
    code += ')';
    return code;
}


Function.prototype.applyFn=function apply(thisArg,argsArray){ //属性长度是从2开始
    // 1、如果‘IsCallable（func）‘ 是false,则抛出一个‘typeError`异常
    if(typeof this !== 'function'){
        throw new TypeError(this + ' is not a function')
    }
    // 2、如果arrArray 是null 或 undefined,则返回提供thisArg作为this值并以空参数列表调用func的[[Call]]内部方法的结果
     if(typeof argsArray === 'undefined' || argsArray === null){
        argsArray=[]
     }
    // 3、如果Type(argArray) 不是Object,则抛出一个TypeError异常
    if(argsArray !== new Object(argsArray)){
        throw new TypeError('CreateListFromArrayLike called on non-object')
    }
    if(typeof thisArg === 'undefined' || thisArg === null){
        // 在外面传入的thisArg 值会修改并成为this 值
        // es3:thisArg 是undefined 或 null 是它会被替换成全局对象 浏览器是window
        thisArg=getGlobalObject()
    }

    /**
     * 
     * 非严格模式
     * // ES3:所有其他值会被应用toObject 并将结果作为this值，这是第三版引入的更改
    thisArg=new Object(thisArg)
    var __fn="__fn"
    thisArg[__fn]=this
    // 提供thisArg 作为this 值并以argList 作为参数列表，调用func的[[Call]]内部方法，返回结果
    var result= thisArg[__fn](...argsArray)
    delete thisArg[__fn]
     */

    /**
     * 严格模式
     */

     thisArg = new Object(thisArg);
    var __fn = '__' + new Date().getTime();
    var originalVal = thisArg[__fn];
    var hasOriginalVal = thisArg.hasOwnProperty(__fn);
    thisArg[__fn] = this;
    var code = generateFunctionCode(argsArray.length);
    var result = (new Function(code))(thisArg, __fn, argsArray);
    delete thisArg[__fn];
    if(hasOriginalVal){
        thisArg[__fn] = originalVal;
    }
    return result
}

// call 的实现
Function.prototype.callFn = function call(thisArg){
    var argsArray = [];
    var argumentsLength = arguments.length;
    for(var i = 0; i < argumentsLength - 1; i++){
        argsArray[i] = arguments[i + 1];
    }
    return this.applyFn(thisArg, argsArray);
}