var user = {}
var responses = []

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}

function question2() {
  var age = prompt('Are you more than 18 years old?')
  if (age.toUpperCase() === "YES"){
  	age = "Adult";
  } 
  else if (age.toUpperCase() === "NO"){
  	age = "Minor";
  }
  else {
  	alert("Answer YES or NO please")
  	return question2();
  }
 responses.push(age);
}

function question3() {
  var place = prompt('Where are you from Earth, Moon, Mars or other');
  place = place.toLowerCase();
  switch (place) {
  	case earth:
        place = "Earthling"
        break;
    case moon:
        place = "Mooninite"
        break;
    case mars:
        place = "Martian"
        break;
    case other:
        place = "Alien"
        break;
    default:
       // default alert("Choose one of the option please")
  		  return question3();
  		  break;
  }
  responses.push(place);
}



question1();
question2();
question3();