let arr = [1, 2, 3]

//传入一个函数
Array.prototype._map = function (fn) {
    //新数组
    const res = []
    //这里的this指向调用这个_map方法的数组
    for (let i = 0; i < this.length; i++) {
        // 调用传入的方法并传参
        res.push(fn(this[i]))
    }
    return res
}
console.log(arr._map(x => x * 2));
