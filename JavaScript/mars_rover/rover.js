var myRover = {//1st Rover
  position: [0,0], 
  direction: 'N'//North direction is in +X direction
};

var secRover = {//2nd Rover
  position: [4,4], 
  direction: 'N'//North direction is in +X direction
};

var X = 10;//Rows
var Y = 10;//Columns

var myGrid = new Array(X)//Grid
for (var i=0; i <X; i++)
    myGrid[i] = new Array(Y)

var preStepMy = [0,0];
var preStepSec = [0,0];

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
     case 'E':
       rover.position[1]--
       break;
     case 'S':
       rover.position[0]--
       break;
     case 'W':
       rover.position[1]++
       break;
  };
  calls();
}

function goBack(rover) {
  switch(rover.direction) {
     case 'N':
       rover.position[0]--
       break;
     case 'E':
       rover.position[1]++
       break;
     case 'S':
       rover.position[0]++
       break;
     case 'W':
       rover.position[1]--
       break;
  };
  calls();
}

function turnRigth(rover) {
  switch(rover.direction) {
    case 'N':
       rover.direction='E'
       break;
     case 'E':
       rover.direction = 'S'
       break;
      case 'S':
        rover.direction = 'W'
        break;
     case 'W':
       rover.direction = 'N'
       break;
  };
  calls();
}

function turnLeft(rover) {
  switch(rover.direction) {
     case 'N':
       rover.direction = 'W'
       break;
     case 'E':
       rover.direction = 'N'
       break;
     case 'S':
       rover.direction = 'E'
       break;
     case 'W':
       rover.direction = 'S'
       break;
  }
  calls();
}

function sequence(moves){
  var moves = moves.split('')
  for (i=0; i<moves.length; i++){
    preStepMy = myRover.position.slice();//Creates a copy of myRober.position
    preStepSec = secRover.position.slice();
    if (moves[i] === "f"){
      goForward(myRover);
      goForward(secRover);
    } 
    else if (moves[i] === "b"){
      goBack(myRover);
      goBack(secRover);
    }
    else if (moves[i] === "r"){
      turnRigth(myRover);
      turnRigth(secRover);
    } 
    else if (moves[i] === "l"){
      turnLeft(myRover);
      turnLeft(secRover);
    }  
  }
}

function calls(){
  inTheGrid(myRover);
  inTheGrid(secRover);
  obstacles();
  console.log("New 1st Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
  console.log("New 2nd Rover Position: [" + secRover.position[0] + ", " + secRover.position[1] + "]")
}

function inTheGrid(rover){
  if (rover.position[0] < 0){
  rover.position[0] = rover.position[0] + X
 }
 else if (rover.position[0] > (X-1)){
  rover.position[0] = rover.position[0] - X
 }
 else if (rover.position[1] < 0){
  rover.position[1] = rover.position[1] + Y 
 }
 else if (rover.position[1] > (Y-1)){
  rover.position[1] = rover.position[1] - Y 
 }
}

function obstacles(){
  if (myRover.position[0] === secRover.position[0] && myRover.position[1] === secRover.position[1]){
    alert("1st & 2nd Rover bump into each other")
    myRover.position = preStepMy;
 }
  else if (myRover.position[0] === 3 && myRover.position[1] === 8){
     alert("1st Rover Detected an Obstacle")
     myRover.position = preStepMy;
  }
  else if (secRover.position[0] === 3 && secRover.position[1] === 8){
     alert("2nd Rover Detected an Obstacle")
     secRover.position = preStepSec;
  }
  else if (myRover.position[0] === 7 && myRover.position[1] === 4){
     alert("1st Rover Detected an Obstacle")
     myRover.position = preStepMy;
  }
   else if (secRover.position[0] === 7 && secRover.position[1] === 4){
     alert("2nd Rover Detected an Obstacle")
     secRover.position = preStepSec;
  }
}

sequence('fffrfflfffbb');
//console.log(myGrid);



