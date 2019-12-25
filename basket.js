
var misses = 0;		// Number of misses 
var playing;
var upkeyPressed = false;
var power = 0;
var powercopy = 0;
var canvasthree = document.getElementById("canvasThree");
var cttxx = canvasthree.getContext("2d");

var baalx=30;
var baaly=570;



window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        upkeyPressed = true;
    }}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        upkeyPressed = false;
    }}
function stop_basket() {
  playing = false;
  alert(playing);
}

function play_basket() {
  playing = true;
  misses = 0;  
  upkeyPressed = false;
  power = 0;
  powercopy = 0;
  baalx=30;
  baaly=570;
}


function launchBall(){
  baaly-=power/300;                     // The amount of change of baaly and baalx is dependent on power.
  baalx+=power**2/3000;
}



function animate(){
  if (upkeyPressed == true && power <= 300){
  	power += 2;
    powercopy +=2;
  }
  else if (upkeyPressed == false && powercopy > 0) {
    powercopy-=2;
    }

  else {
  launchBall();}
    

  
  

  

  cttxx.clearRect(0, 0, canvasthree.width, canvasthree.height);

  cttxx.beginPath();
  cttxx.rect(230,500, 300,40, 50);
  cttxx.fillStyle = "blue";
  cttxx.fill();
  cttxx.closePath();

  cttxx.beginPath();
  cttxx.rect(230,500, powercopy,40, 50);
  cttxx.fillStyle = "yellow";
  cttxx.fill();
  cttxx.closePath();

  cttxx.beginPath();
  cttxx.arc(baalx,baaly, 30, 0, 2 * Math.PI);
  cttxx.fillStyle = "red";
  cttxx.fill();
  cttxx.closePath();

}

setInterval(animate,10);
