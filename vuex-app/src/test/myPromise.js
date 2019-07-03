const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
    var $this = this;
    this.state = PENDING;
    this.value = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    
    fn(resolve)

    function resolve(value){
        if($this.state==PENDING){
            $this.state = RESOLVED;
            $this.value = value;
            $this.resolvedCallbacks.forEach(cb=>cb(value));
        }
    }
}
//resolve函数执行后更改state为RESOLVED
MyPromise.prototype = {
    then: function(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
        console.log(this.state,'this.state')
        
        if(this.state === PENDING){
            this.resolvedCallbacks.push(onFulfilled);
            this.rejectedCallbacks.push(onRejected);
        }
        if(this.state === RESOLVED){
            onFulfilled(this.value);
        }
        if(this.state === REJECTED){
            onRejected(this.value);
        }
        
    }
}
function getList(){
    return new MyPromise(resolve=>{
        setTimeout(()=>{
            resolve([1,2,3,4]);
        },1000)
        
    })
}



getList().then(res=>console.log(res,'res'));