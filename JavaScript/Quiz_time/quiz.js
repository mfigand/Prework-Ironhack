var user = {}
var responses = []

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}

function question2() {
  var director = prompt('Who direct Pulp Fiction Quentin Tarantino or Guy Ritchie?')
  if (director.toLowerCase() === "quentin tarantino"){
  	director = true;
  } 
  else if (director.toLowerCase() === "guy ritchie"){
  	director = false;
  }
  else {
  	alert("Choose one of the option please")
  	return question2();
  }
 responses.push(director);
}

function question3() {
  var kill = prompt('Who killed Wolverine? Magneto, Dr. Cornelius, Omega Red or Sabretooth');
  kill = kill.toLowerCase();
  switch (kill) {
  	case "magneto":
        kill = false
        break;
    case "dr. cornelius":
        kill = true
        break;
    case "omega red":
        kill = false
        break;
    case "sabretooth":
        kill = false
        break;
    default:
        alert("Choose one of the option please")
  		  return question3();
  		  break;
  }
  responses.push(kill);
}

function question4() {
  var jedi = prompt('Who is the most powerful jedi? Obi Wan, Luke Skywalker, Yoda, Anakin or Shaak Ti');
  jedi = jedi.toLowerCase();
  switch (jedi) {
    case "obi wan":
        jedi = false
        break;
    case "luke skywalker":
        jedi = false
        break;
    case "yoda":
        jedi = true
        break;
    case "anakin":
        jedi = false
        break;
    case "Shaak Ti":
        jedi = false
        break;
    default:
        alert("Choose one of the option please")
        return question4();
        break;
  }
  responses.push(jedi);
}


function question5() {
  var best = prompt('Who is the best Godfather Marlon Brando or Al Pacino?')
  if (best.toLowerCase() === "marlon brando"){
    best = true;
  } 
  else if (best.toLowerCase() === "al pacino"){
    best = false;
  }
  else {
    alert("Answer YES or NO please")
    return question5();
  }
 responses.push(best);
}

function evaluate(responsesArray) {
// declare two variables to store the totals
var correct = 0
var incorrect = 0

// populate the “totals” variables from the “responsesArray”
for (i=0; i<responsesArray.length; i++){
  if (responsesArray[i] === true){
    correct += 1;
  }
  else {
    incorrect += 1;
  }
}

// save the “totals” variables inside the user object
user.correct = correct
user.incorrect = incorrect

// call showResults
 return showResults(user)

}

function showResults(user) {
  console.log(user);
// display the user results
}

question2();
question3();
question4();
question5();
evaluate(responses);


