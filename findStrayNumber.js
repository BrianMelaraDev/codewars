function stray(numbers) {
    let constant 
    for (let i = 0; i < numbers.length; i++){
      if(numbers[i] === numbers[i+1]){
         constant = numbers[i]
      }
      if( constant !== numbers[i] ){
        return numbers[i]
      }
    }
  }