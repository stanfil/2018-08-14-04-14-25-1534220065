module.exports = function main(input) {
    // console.log("Debug Info");
    // return 'Hello World!';
    let n = [[],[],[]]
    let str = 
    `._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|`
    str.split('\n').forEach((a, i)=>{
        a.split('   ').forEach((b, j)=>{
            n[i][j] = b
        })
    })
    let ans = [[],[],[]]
    input.split('').forEach((a, i)=>{
        ans[0][i] = n[0][a]
        ans[1][i] = n[1][a]
        ans[2][i] = n[2][a]
        
    })
    ans = ans.map(item => item.join(' '))
    let output = ans.join('\n')+'\n'
    console.log(output)
    return output
};