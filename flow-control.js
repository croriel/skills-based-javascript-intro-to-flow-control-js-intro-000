
function basicTeenager(age) {
  if(age >= 13 && age <= 19) {
    return "You're a teenager!";
  }
}


function teenager(age) {
  if( age>= 13 && age <= 19) {
    return "You're a teenager!";
  } else {
    return "You're not a teenager";
  }
}


function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return "You're a teenager!";
  } else if(age <= 12) {
    return "You're a kid";
  } else(age >= 19) {
    return "You're a grownup";
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}
function switchAge(age) {
  switch (age) {
    case 13:
      return "You're a teenager";
    case 14:
      return "You're a teenager";
    case 15:
      return "You're a teenager";
    case 16:
      return "You're a teenager";
    case 17:
      return "You're a teenager";
    case 18:
      return "You're a teenager";
    case 19:
      return "You're a teenager";
break;
    default:
      return "You have an age";

  }
}
