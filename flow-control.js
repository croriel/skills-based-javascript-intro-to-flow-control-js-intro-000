var basicTeenager=age
function basicTeenager(age) {
  if(age>=13&&<=19) {
    return "You're a teenager!";
  }
}

var teenager=age
function teenager(age) {
  if(age>=13&&<=19) {
    return "You're a teenager!";
  } else {
    return "You're not a teenager";
  }
}

var ageChecker=age
function ageChecker(age) {
  if(age>=13&&<=19) {
    return "You're a teenager!";
  } else if(age<=12) {
    return "You're a kid";
  } else(age>=19) {
    return "You're a grownup";
  }
}

var age=ternaryTeenager
function ternaryTeenager(age) {
  return age>=13&&<=19 ? "You are a teenager" : "You are not a teenager"
}

var age=switchAge
function switchAge(age) {
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You're a teenager";
    default:
      return "You have an age";

  }
}
