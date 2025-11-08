let testObj = {
    babel: '北京市',
    child: [
        {
            babel: '朝阳区',
            child: [
                {
                    babel: '西半街道',
                },
                {
                    babel: '向上向善',
                }
            ]
        },
        {
            babel: '昌平区',
            child: [
                {
                    babel: '香水百合',
                },
                {
                    babel: '昌平街道',
                }
            ]
        }
    ]
}

// 如果还有其他的顶级城市，就需要用到这个代码
function searchTree(keyWord, treeData) {
    let finalResult = [];
    for (const rootNode of treeData) {
        // 对每一个顶级节点（每个城市）都启动一次搜索
        finalResult = finalResult.concat(search(keyWord, rootNode, []));
    }
    return finalResult;
}

function search(keyWord, node, path = []) {
    const newPath = [...path, node.babel]
    let result = []
    if (node.babel.includes(keyWord)) {
        result.push(newPath)
    }

    if (node.child) {
        for (const child of node.child) {
            result = result.concat(search(keyWord, child, newPath))
        }
    }
    return result
}
console.log(search('昌平', testObj, []));
