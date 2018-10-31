// Rover Object Goes Here
// ======================

// ======================
//Create rover object and set properties
var rover = {
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: []
}
function turnLeft(rover){
  switch (rover.direction){
    case "N":
      rover.direction = "W"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "S":
       rover.direction = "E"
    case "E":
       rover.direction = "N"
       break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "S"
      break;
    case "S":
       rover.direction = "W"
    case "W":
       rover.direction = "N"
       break;
   }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch(rover.direction){
    case 'N':
    if(rover.positionY < 1){
      console.log("Rover is at the limit, you cannot move it any further");
    } else {
      rover.positionY = rover.positionY - 1;
    };
    break;
    case 'E':
    if (rover.positionX > 8  ) {
      console.log("Rover is at the limit, you cannot move it any further");
    } else {
      rover.positionX = rover.positionX + 1;
    };
    break;
  case 'S':
    if (rover.positionY > 8) {
      console.log("Rover is at the limit, you cannot move it any further");
    } else {
      rover.positionY = rover.positionY + 1;
    };
    break;  
    case 'W':
    if (rover.positionX < 1) {
      console.log("Rover is at the limit, you cannot move it any further");
    } else {
      rover.positionX = rover.positionX - 1;
    };
    break;
  }
  console.log("moveForward was called");
  console.log(" The position of the Rover is: " + [rover.positionX, rover.positionY]);
}

function commandsRover(rover){
  var route = prompt("Insert the commands to move the Rover: f: forward, r: right, l: left");
   if(route.indexOf('f') >= 0 || route.indexOf('r') >= 0 || route.indexOf('l') >= 0 ){
   var newRoute = route.split("");
   console.log("Rover's route: " + route);
   for(var i = 0;  i < newRoute.length; i++){
     
      switch(route[i]){
      case 'l': turnLeft(rover); break;
      case 'r': turnRight(rover); break;
      case 'f': moveForward(rover); break;
     }
     
      var position = [rover.positionX, rover.positionY];
      rover.travelLog.push(position);
      console.log("Rover's current location: " + position);
  
    }//End of Forloop
   
   }else {
     alert("Enter a valid command!!");
     commandsRover(rover);//prompt pop-up again if invalid command
   }
 }
 commandsRover(rover);
 console.log (rover.travelLog);







