let base = arr[0]
  for (i = 0; i <= arr.length; i++){
    if ((arr[i] - base) > 0){
      return arr[i]
    }
    else if (i === arr.length){
      return null
    }
    else{
      base += 1
    }
  }
