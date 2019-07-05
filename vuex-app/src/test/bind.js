var xiang = {
    name: 'xiang'
}

var fen = {
    name: 'fenfen',
    sayName() {
        console.log(this, this.name);
        return [...arguments].reduce((base, cur) => base += cur, 0)
    }
}
//demo
var num = fen.sayName.bind(xiang, 1, 2, 3, 4, 5)(100,200);
console.log(num, 'num')

//by lzx
Function.prototype.myBind = function (context) {
    context.fn = this;
    if (arguments.length > 1) {
        const args = [...arguments].splice(1);
        return function F() {
            var result = context.fn(...args.concat([...arguments]));
            delete context.fn;
            return result
        }
    }else {
        return function F() {
            context.fn();
        }
    }

}
var num2 = fen.sayName.myBind(xiang,33,44)(55);
console.log(num2,'num2')

//by 宋小菜
Function.prototype.myBind2 = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1);
    // 返回一个函数
    return function F() {
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
        return new _this(...args, ...arguments)
      }
      return _this.apply(context, args.concat(...arguments))
    }
  }

  var num3 = fen.sayName.myBind2(xiang,100,200)(300);
console.log(num3,'num3')

