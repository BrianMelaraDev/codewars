// Invert Values
function invert(array) {
  return array.map(num=>  {
    return num * -1
  })
}
// quarter of the year
const quarterOf = (month) => {
  if (month>=1 && month<=3){
  return 1
  }else if (month>=4 && month<=6){
  return 2
  }else if(month>=7&&month<=9){
  return 3
  }else{
  return 4
  }

}
// a wolf in sheep's clothing
function warnTheSheep(queue) {

if (queue[queue.length -1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
    } else {
     let index = queue.findIndex( (x) => x == 'wolf' );
     return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
  }
// is he gunna survive
function hero(bullets, dragons){
if (bullets>0){
if (bullets / dragons >=2   ){
  return(true)
}else{
  return(false)
}
}else{
  return(false)
}
}
// my head is at the wrong end!
function fixTheMeerkat(arr) {
 let givenArr = arr;
 return givenArr.reverse()
}
// multiply
function multiply(a,b){

  a * b
  return a*b
}
