function beautifyLetters( array ){  
  var newArray = []
  for (var index = 0; index < array.length; index++) {
       
     if (isNaN(array[index])) {
      newArray[index] = letters(array[index]);
     }
     else {
      newArray[index] = array[index];
     }
  }
  return newArray;
}

function letters(array){
  if ( array === "a" || array === "e" || array === "i" || array === "o" || array === "u"){
    array = array.toUpperCase()
  }
  else {
    array = array.toLowerCase()
  }

  return array
}

console.log(beautifyLetters(["a", 6, "o", "e", "*", 8, 78, "j" ]));