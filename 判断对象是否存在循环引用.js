// 对象的循环引用是指对象的某个属性引用了对象本身，形成一个循环结构。
const obj = { a: { d: 1 } }
obj.c = obj.a

console.log(hasCircularReference(obj)); // true

function hasCircularReference(obj, visitList = new WeakSet()) {
    // 1、判断obj 的合法性
    if (!obj || typeof obj !== 'object') return false
    // 2、判断visitList里面是否存在obj
    if (visitList.has(obj)) return true
    // 3、 递归判断obj的每一个key
    visitList.add(obj)
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (hasCircularReference(obj[key], visitList)) {
            return true
        }
    }
    visitList.delete(obj)
    return false
}