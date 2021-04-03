function countSheeps(arrayOfSheep) {
    let sheepCounter =0
    for (let i=0;i<arrayOfSheep.length;i++){
      if (arrayOfSheep[i]===true){
        sheepCounter++
       
      }
    }
   
    return sheepCounter
  }