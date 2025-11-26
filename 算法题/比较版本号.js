/**
 * 牛客项目发布项目版本时会有版本号，比如1.02.11，2.14.4等等
现在给你2个版本号version1和version2，请你比较他们的大小
版本号是由修订号组成，修订号与修订号之间由一个"."连接。1个修订号可能有多位数字组成，修订号可能包含前导0，且是合法的。例如，1.02.11，0.1，0.2都是合法的版本号
每个版本号至少包含1个修订号。
修订号从左到右编号，下标从0开始，最左边的修订号下标为0，下一个修订号下标为1，以此类推。

比较规则：
一. 比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较忽略任何前导零后的整数值。比如"0.1"和"0.01"的版本号是相等的
二. 如果版本号没有指定某个下标处的修订号，则该修订号视为0。例如，"1.1"的版本号小于"1.1.1"。因为"1.1"的版本号相当于"1.1.0"，第3位修订号的下标为0，小于1
三.  version1 > version2 返回1，如果 version1 < version2 返回-1，不然返回0.
 */

// 进阶要求:空间复杂度O(1),时间复杂度O(n)

// 想法一：将版本号都按.进行分割成字符数组，然后进行对比

// 这里关键的一点就是当一个版本号遍历完了之后，还要继续遍历下去。   
// 测试用例"1.0.1" 和 "1"
function compare( version1 ,  version2 ) {
    // write code here
    const arr1 = version1.split('.')
    const arr2  =version2.split('.')

    let i = 0
    while(i<arr1.length || i<arr2.length){
        let p = i<arr1.length? parseInt(arr1[i]) : 0
        let q = i<arr2.length? parseInt(arr2[i]) : 0
        if(p > q){
            return 1
        } else if(p < q){
            return -1
        }
        i++   
    }
    return 0 
}

// 进阶要求：采用双指针，空间复杂度为O(1)
function compare( version1 ,  version2 ) {
    let n1 = version1.length
    let n2 = version2.length
    let i = 0
    let j = 0
    while(i<n1 || j<n2){
        let num1 = 0;
        let num2 = 0;
        while(i<n1 && version1[i]!== '.'){
            num1 = num1 * 10 + parseInt(version1[i])
            i++
        }
        while(j<n2 && version2[j]!== '.'){
            num2 = num2 * 10 + parseInt(version2[j])
            j++
        }
        if(num1>num2){
            return 1
        }else if(num1<num2){
            return -1
        }
        i++
        j++
    }
    return 0
}