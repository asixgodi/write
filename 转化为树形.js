const data = [
    { id: 1, pid: 0, name: 'Root' },
    { id: 2, pid: 1, name: 'Child 1' },
    { id: 3, pid: 2, name: 'Child 2' },
];

function jsonToTree(data) {
    let result = []
    if (!Array.isArray(data)) {
        return result
    }
    // 定义一个map是为了很快的获取到data中pid对应的id的那个对象
    let map = {}
    data.forEach(item => {
        map[item.id] = item
    })
    console.log(map);

    data.forEach(item => {
        // 取出父对象,map索引为0，没有东西
        let parent = map[item.pid]
        if (parent) {
            parent.children ? parent.children.push(item) : (parent.children = []).push(item)
        } else {
            result.push(item)
        }
    })
    return result
}
console.log(JSON.stringify(jsonToTree(data)));
