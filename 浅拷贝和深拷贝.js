//浅拷贝：只赋值对象的第一层属性，嵌套的对象/数组仍然是引用
//方法：扩展运算符，Object.assign
//对于数组来说：可以使用slice、concat：截取数组的一部分，返回一个新的数组
//扩展运算符
const obj = {
    a: 1,
    b: {
        c: 1
    }
}

const newObj = { ...obj }

//Object.assign  第一个参数是目标对象（拷贝后的结果会被合并到该对象）
const newObj2 = Object.assign({}, obj)

//深拷贝：完全复制对象及其嵌套结构，新旧对象互不影响
//方法：JSON.parse(JSON.strigify())，递归实现，第三方库

const deepCopy = JSON.parse(JSON.stringify(obj));


// 递归实现深拷贝、JSON.stringfy、loadsh的cloneDeep方法
// weakmap的作用就是解决循环引用的问题
function deepClone(obj, hash = new WeakMap) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    //如果hash中有这个对象，则直接返回hash中存储的对象引用
    if (hash.has(obj)) return hash.get(obj)
    // obj.constructor()获取对象的构造函数，是数组就新建数组，是对象就新建对象
    const cloneObj = new obj.constructor();
    //记录映射，将原始对象作为键，新对象作为值，存入map中
    hash.set(obj, cloneObj);

    for (let key in obj) {
        // hasOwnProperty 只取自己身上的属性，过滤掉原型链上的属性
        if (obj.hasOwnProperty(key)) {
            //对每个属性值调用deepclone
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj
}
let clone = {
    name: 'a'
}
clone.self = clone
console.log(deepClone(clone));
