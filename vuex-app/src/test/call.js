var xiang = {
    name: 'xiang'
}

var fen = {
    name: 'fenfen',
    sayName() {
        console.log(this.name);
        return [...arguments].reduce((base, cur) => base += cur, 0)
    }
}


/*** call ****/
console.log(fen.sayName.call(xiang, 1, 2, 3))

//way1: 将函数赋值给call传入的对象，再进行调用
Function.prototype.myCall1 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('只能给函数用')
    }
    context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    const result = context.fn(...args);
    delete context.fn;
    return result
}
console.log(fen.sayName.myCall1(xiang, 1, 2, 3))

//way2: change this point use bind
Function.prototype.myCall2 = function (prop) {
    if (typeof this !== 'function') {
        throw new TypeError('只能给函数用')
    }
    var args = [...arguments].slice(1);
    prop = prop || window;
    var result = this.bind(prop)(...args);
    return result;
}
console.log(fen.sayName.myCall2(xiang, 1, 2, 3))


/*** apply ****/
console.log(fen.sayName.apply(xiang, [1, 2, 3, 4]))

//way1: 将函数赋值给call传入的对象，再进行调用
Function.prototype.myApply1 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('只能给函数用')
    }
    context = context || window;
    context.fn = this;
    if (arguments[1]) {
        var result = context.fn(...arguments[1]);
    } else {
        var result = context.fn();
    }
    delete context.fn;
    return result
}
console.log(fen.sayName.myApply1(xiang, [1, 2, 3, 4]))
console.log(fen.sayName.myApply1(xiang))

//way2: change this point use bind
Function.prototype.myApply2 = function (prop) {
    console.log( this,'typeof thistypeof thistypeof this')
    if (typeof this !== 'function') {
        throw new TypeError('只能给函数用')
    }
    prop = prop || window;
    if (arguments[1]) {
        var result = this.bind(prop)(...arguments[1]);
    } else {
        var result = this.bind(prop)();
    }

    return result;
}
console.log(fen.sayName.myApply2(xiang, [1, 2, 3, 4]))
console.log(fen.sayName.myApply2(xiang))
