var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

var makeParticle = function(x, y, radius) {
  context.beginPath();
  context.fillStyle = "white"
  context.arc(x, y, radius, 0, Math.PI*2, true);
  context.closePath();
  context.fill();
}

var posX = 20;
var posY = 100;

var vx = 10;
var vy = -10;
var gravity = 1;

setInterval(function() {

  context.fillStyle = "black";
  context.fillRect(0,0, canvas.width, canvas.height);

  posX += vx;
  posY += vy;
  vy += gravity;

  if (posY > canvas.height * 0.75) {
    vy *= -0.6;
    vx *= 0.75;
    posY = canvas.height * 0.75;
  }

  makeParticle(posX, posY, 10);
}, 30);

$( document ).ready(function(){

  document.body.appendChild(canvas);
  context.fillRect(0, 0, canvas.width, canvas.height);

  setInterval();

  var particles = {};
  var particleIndex = 0;
  var settings = {
    density: 20,
    particleSize: 10,
    startingX: canvas.width / 2,
    startingY: canvas.height / 4,
    gravity: 0.5,
    maxLife: 100
  };
});



// function Particle(x,y) {
//   this.x = this.oldX = x;
//   this.y = this.oldY = y;
// }

// Particle.prototype.integrate = function() {
//   var velocityX = this.x - this.oldX;
//   var velocityY = this.y - this.oldY;
//   this.oldX = this.x;
//   this.oldY = this.y;
//   this.x += velocityX;
//   this.y +- velocityY;
// };

// Particle.prototype.attract = function(x, y){
//   var dx = x - this.x;
//   var dy = y - this.y;
//   var distance = Math.sqrt(dx * dx + dy * dy);
//   this.x =+ dx / distance;
//   this.y += dy / distance;
// };

// for (var i=0; i < particles.length; i++) {
//   particles[i].attract(mouse.x, mouse.y);
//   particles[i].integrate();
//   particles[i].draw();
// }
