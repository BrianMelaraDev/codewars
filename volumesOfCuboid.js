function findDifference(a, b) {
    let arrA=a.reduce((acc,val)=>acc*val,1)
    let arrB=b.reduce((acc,val)=>acc*val,1)
    return Math.abs(arrA-arrB)
 }