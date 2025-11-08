/**
 * 给一个01矩阵，1代表是陆地，0代表海洋， 如果两个1相邻，那么这两个1属于同一个岛。我们只考虑上下左右为相邻。
岛屿: 相邻陆地可以组成一个岛屿（相邻:上下左右） 判断岛屿个数。
 */
// grid char字符型二维数组

// 思路：遍历这个二维数组，碰到1就num++，然后置为0，然后应用dfs进行搜索，将其附件的置为0
function solve( grid ) {
    // write code here
    let num = 0
    if(grid.length === 0) return 0
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j] === '1'){
                num++
                dfs(grid,i,j)
            }
            
        }
    }
    return num
}

function dfs(grid,currentX,currentY){
    // 递归终止条件
    if(grid[currentX][currentY] === '0'){
        return
    }
    grid[currentX][currentY] = 0
    // 上
    if(currentX-1>=0 && grid[currentX-1][currentY] === '1') dfs(grid,currentX-1,currentY)
    //下
    if(currentX+1<grid.length && grid[currentX+1][currentY] === '1') dfs(grid,currentX+1,currentY) 
    // 左 
    if(currentY-1>=0 && grid[currentX][currentY-1] === '1') dfs(grid,currentX,currentY-1)
    //右
    if(currentY+1<grid[0].length && grid[currentX][currentY+1] === '1') dfs(grid,currentX,currentY+1)          
}