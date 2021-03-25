function hasUniqueChars(str){
  let unique = [...new Set(str)]
  if (str.length=== unique.length){
    return true
  }else{
    return false
  }
}
