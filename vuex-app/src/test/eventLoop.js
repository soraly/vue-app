console.log('start..')
setTimeout(()=>{
    console.log(1111);
},1000)
setTimeout(()=>{
    console.log(2222);
},4000)
for(var i=0;i<5000;i++){
    for(var j=0;j<3000;j++){
        
    }
}
//先执行同步代码，异步代码会被挂起并放到Task(任务)队列中去，当同步代码的执行栈为空时，
//Event Loop就从task队列中拿出需要执行的代码并放入执行栈中执行
//当上述定时器任务被挂起时，计时已经开始，等同步代码执行完后，发现耗时已经超过了定时间的计时时间，所以2个定时器内部的代码同时输出来了。
console.log('add done');