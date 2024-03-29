// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

const step =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            red()
            resolve()
        },3000)
    }).then(()=>{
       return new Promise(resolve=>{
            setTimeout(()=>{
                yellow()
                resolve() 
            },2000) 
       })
    }).then(()=>{
       return new Promise((resolve)=>{
        setTimeout(()=>{
            green()
            resolve()
        },1000)
       })
    }).then(()=>{
        return step()
    })
}

step()