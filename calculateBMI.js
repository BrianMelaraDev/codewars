function bmi(weight, height) {
  let answer = weight / (height * height)
 let bmi= answer <= 18.5 ? 'Underweight': answer <=25.0 ? 'Normal':
  answer <=30.0 ? 'Overweight':answer > 30 ? 'Obese': false
  return bmi
}
