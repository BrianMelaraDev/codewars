function disemvowel(str) {
    let arrV= ['a','e','i','o','u']
   let newStr = str.split('').reduce((acc, letter)=>{
     if(arrV.includes(letter.toLowerCase())){
       return acc
     }
     else{
       acc.push(letter)
     }
     return acc
   }, []).join('')
   return newStr
  
  }