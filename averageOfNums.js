// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
function averages(numbers) {
    let arr = []
    if(numbers === null || numbers.length <= 1) return []
    for(let i = 0; i < numbers.length - 1; i++){
      arr.push((numbers[i] + numbers[i + 1]) / 2)
    }
    return arr
  }