// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]
function bald(x){
    let counter =0
    let arrString=x.split('')
    for (let i=0; i<arrString.length ; i++){
      if(arrString[i]== '/'){
        arrString[i]='-'
        counter ++  
      }
    } 
    let outPut  =  counter ===0 ?'Clean!' : counter ===1 ? 'Unicorn!' : counter === 2 ? 'Homer!' : counter <= 5 ? 'Careless!' : 'Hobo!'
    return [arrString.join(''), outPut]
    }