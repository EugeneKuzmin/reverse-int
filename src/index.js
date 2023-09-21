module.exports = function reverse (n) {
    n = Math.abs(n)
    let nn = String(n).split('').reduce((num,n)=>{
        num.unshift(n)
        return num
    },[])
  return nn.join('')
}
