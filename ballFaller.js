var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var score = 0;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

X = Math.random()*(canvas.width-10);	          // X Position of the falling ball
RAX = Math.random()*(canvas.width-10);          // X Position of the falling ball
LeftX = 0;
LeftXx = canvas.width;


var Y = 0;		                                  // Y Position of the falling ball
var BY = canvas.height;                         // Y Position of the falling ball
LeftY = Math.random()*(canvas.height-10);
LeftYy = Math.random()*(canvas.height-10);


var x = canvas.width/2;     // X Position of the Main Character 
var y = canvas.height/2;    // Y Position of the Main Character 


var size = 20;					    // Size of the main Character

var dy = 2; 



var bdX = Math.random()*(canvas.width-60);
var bdY = canvas.height;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var color = "#FF0000";

function getColor(){
  var color;
  if (Math.random()<.5){
    color = "#FF0000";
    return color;
  }
  color = "#0095DD";
  return color;
}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key=="Up" || e.key=="ArrowUp"){
    	upPressed = true
    }
    else if (e.key=="Down" || e.key== "ArrowDown") {
    	downPressed =true
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }

     else if (e.key=="Up" || e.key == "ArrowUp"){
    	upPressed = false
    }
    else if (e.key=="Down" || e.key== "ArrowDown") {
    	downPressed =false
    }
}

function drawCharacter() {				// Draws the main character of the game
  ctx.beginPath();
  ctx.arc(x,y, size, 0, Math.PI*2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

}


function drawBall() {        // Draws the falling balls
  ctx.beginPath();
  ctx.arc(X,Y, 20, 0, Math.PI*2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawBallBelow() {        // Draws the falling balls
  ctx.beginPath();
  ctx.arc(RAX,BY, 60, 0, Math.PI*2);
  ctx.fillStyle = "#32CD32";
  ctx.fill();
  ctx.closePath();
}

function drawBallLeft() {        // Draws the falling balls
  ctx.beginPath();
  ctx.arc(LeftX,LeftY,40, 0, Math.PI*2);
  ctx.fillStyle = "#800080";
  ctx.fill();
  ctx.closePath();
}

function drawBallRight() {        // Draws the falling balls
  ctx.beginPath();
  ctx.arc(LeftXx,LeftYy,60, 0, Math.PI*2);
  ctx.fillStyle = "#FF1493";
  ctx.fill();
  ctx.closePath();
}


function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCharacter();
  drawBall();
  drawBallBelow();
  drawBallLeft();
  drawBallRight();

	if (rightPressed == true & x <= canvas.width-size){
    x+=2;
  }
  	if (leftPressed == true & x >= size) {
    x-=2;
  }
 	if (upPressed == true & y >= size ){
    y-=2;
  }
	if (downPressed == true & y <= canvas.height-size) {
    y+=2;
  }

  if (Y==canvas.height) {
    X = Math.random()*(canvas.width-10);
    Y=0;
    color = getColor()
  }
  
  if (Math.abs(X-x) <= size && Math.abs(Y-y) <= size) {
    if (color == "#FF0000") {
      size+=10;
      X = Math.random()*(canvas.width-10);
      Y=0;
      color = getColor();
      }
    if (size >=20 && color == "#0095DD" ) {
      size-=10;
      X = Math.random()*(canvas.width-10);
      Y=0;
      color = getColor();
      }
    }

  if (Math.abs(RAX-x) <= size && Math.abs(BY-y) <= size) {
      BY=canvas.height;
      RAX = Math.random()*(canvas.width);
      size+=20;
  }

  if ( size >= 50 ){      // Game Over
    alert("TOO BIG. Game Over. Your score: " + score)
    size=20;
  }

  if (BY==0) {
    BY=canvas.height;
    RAX = Math.random()*(canvas.width);
  }

  if (Math.abs(LeftX-x) <= size+20 && Math.abs(LeftY-y) <= size+20 ){
    size+=20;
    LeftX =0;
    LeftY = Math.random()*(canvas.height-10);
  }


  if (LeftX > canvas.width){
    LeftX =0;
    LeftY = Math.random()*(canvas.height-10);
  }

  if (LeftXx < 0 ){
    LeftXx=canvas.width;
    LeftYy = Math.random()*(canvas.height-10);
  }

  Y+=dy;
  BY-=dy;
  LeftXx-=dy;
  LeftX+=dy;
  score += 1;

}

setInterval(draw,10);
