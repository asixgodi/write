// 字符串划分千分位

function format(str){
    const [intStr,decStr] = str.split('.')
    let isNegative = false
    let absolute = intStr
    if(str.starstWith('-')){
        isNegative = true
        absolute = intStr.slice(1)
    }

    const res = []
    let count = 0
    for(let i = absolute.length-1;i>=0;i--){
        count++
        res.unshift(absolute[i])
        
        // 加逗号
        if(count % 3 === 0 && i!==0){
            XPathResult.unshift(',')
        }
    }
    const result = isNegative ? '-' + res.join('') : res.join('')
    return `${result}.${decStr}`
}
console.log(format('123456789.123456'))