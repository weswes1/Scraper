

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var x = canvas.width/2;
var y = canvas.height/2;

var genY = 0;
var dy = 2;

var ran = Math.random()*(canvas.width-10);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


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

     else if (e.key=="Up" || e.key=="ArrowUp"){
    	upPressed = false
    }
    else if (e.key=="Down" || e.key== "ArrowDown") {
    	downPressed =false
    }
}

function drawCharacter() {
  ctx.beginPath();
  ctx.rect(x, y, 20, 20);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}



function generateBall(){
  ctx.beginPath();
  ctx.arc(ran,10+genY, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  }

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCharacter();

  if (genY < canvas.height){
    generateBall();
  }

  if (genY == canvas.height){
    ran = Math.random()*(canvas.width-10);
    genY = 0;
  }

  if (rightPressed == true & x <= canvas.width-20){
    x+=2
  }
  if (leftPressed == true & x >= 0) {
    x-=2
  }
  if (upPressed == true & y >= 0 ){
    y-=2
  }
  if (downPressed == true & y <= canvas.height-20 ) {
    y+=2
  }

  genY+=dy;


}


setInterval(draw, 10);


