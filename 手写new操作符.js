// 在 JavaScript 中，new 操作符用于创建一个用户自定义的对象类型的实例或具有构造函数的内置对象的实例。new 操作符执行以下步骤：

// 创建一个新的空对象。
// 将这个新对象的内部原型链接到构造函数的 prototype 对象。
// 将这个新对象作为 this 上下文。
// 如果该函数没有返回其他对象，那么返回 this。


// new关键字用来创建对象的，所以返回的是一个对象，首先得创建一个空对象
function myNew(constructor, ...args) {
    // 创建一个新对象，并将其原型指向构造函数的原型
    const obj = Object.create(constructor.prototype);
    //this指向这个obj
    const result = constructor.apply(obj, args);

    return result instanceof Object ? result : obj
}

function Person(name, age) {
    this.name = name
    this.age = age
}

const p = myNew(Person, 'Alice', 18)
console.log(p.name, p.age);
