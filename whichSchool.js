/*if (age < 13) {
    console.log("Elementary School");
  } else if (age >= 13 && age <= 18) {
    console.log("Secondary School");
  } else if (age > 18){
    console.log("Lighthouse Labs");
  }*/

/*function whichSchool(age) {
  if (age >= 13 && age <= 18) {
    console.log("Secondary School");
  }
  else if (age > 18){
    console.log("Lighthouse Labs");
  }
  else if (age < 13){
    console.log("Elementary School");
  }
  return age;

console.log(whichSchool(100));*/

// CORRECT LIGHTHOUSE LABS RESULT, BELOW


  function whichSchool(age) {
    if (age >= 13 && age <= 18) {
      return ("Secondary School");
    }
    else if (age > 18){
      return ("Lighthouse Labs");
    }
    else if (age < 13){
      return ("Elementary School");
    }
    return age;
  }
  
  console.log(whichSchool(100));