function switcheroo(x){
    let arr= x.split('')
    for(let i=0; i < arr.length; i++){
      if(arr[i]==='a'){
        arr.splice(i,1,'b')
      }else if(arr[i]==='b'){
        arr.splice(i,1,'a')
      }
    }
    return arr.join('')
  }