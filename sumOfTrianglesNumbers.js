// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
// e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.
function sumTriangularNumbers(n) {
    let arr = []
    if(n > 0){
      let sum = 0
      for(let i=0; i<n;i++){
        sum = sum + (i+1)
        arr.push(sum)
       }
        }else{
         return 0;
       }
    let total = 0
    for(let i = 0 ;i<arr.length;i++){
      total = arr[i] + total
    }
      return total
  }