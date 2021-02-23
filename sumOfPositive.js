function positiveSum(arr) {
  var x=0
  for (var i=0;i < arr.length; i++){
    if (Math.sign(arr[i]) > 0){
    x = x + arr[i]
    }
  }
  return x
}
