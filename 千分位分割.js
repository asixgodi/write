function formatNumber(num) {
    if (num === null || num === undefined || isNaN(num)) {
        return 'Invalid Number'
    }

    // 处理负数
    let numStr = String(num);
    let sign = ''
    if (numStr.startsWith('-')) {
        sign = '-'
        numStr = numStr.slice(1)
    }
    // 拆分整数和小数部分
    let [integerpart, decimalpart] = numStr.split('.');
    decimalpart = decimalpart ? '.' + decimalpart : ''
    let result = '';
    let count = 0;
    for (let i = integerpart.length - 1; i >= 0; i--) {
        result = integerpart[i] + result;
        count++;
        if (count === 3 && i > 0) {
            result = ',' + result;
            count = 0;
        }
    }
    return sign + result + decimalpart;
}
console.log(formatNumber(1234567));
console.log(formatNumber(-12345.67));