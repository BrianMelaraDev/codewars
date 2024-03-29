// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
function rowWeights(array){
    let One = [];
    let Two = [];
    
    array.filter((item, index) => index % 2 === 0 ? One.push(item) : Two.push(item))
    
    let teamOne = One.reduce((a,b) => a + b, 0)
    let teamTwo = Two.reduce((a,b) => a + b, 0)
    
    return [teamOne, teamTwo]
  }