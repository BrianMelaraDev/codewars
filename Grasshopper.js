let mean = (s1 + s2 + s3)/3
  switch(true){
      case (mean >= 90):
        return 'A'
      break
      case (mean >= 80):
        return 'B'
      break
      case (mean >= 70):
        return 'C'
      break
      case (mean >= 60):
        return 'D'
      break
      case (mean < 60):
        return 'F'
      break
  }
