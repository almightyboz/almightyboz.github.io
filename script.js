// initialize and empty canvas and place it on the page
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

// draw a circle parties on the canvas
var makeParticle = function(x, y, radius) {
  context.beginPath();
  context.fillStyle = "white"
  // after setting fill style, draw an arc on the canvas
  context.arc(x, y, radius, 0, Math.PI*2, true);
  context.closePath();
  context.fill();
}

// initial starting position
var posX = 20;
var posY = 100;
// initial velocities
var vx = 10;
var vy = -10;
var gravity = 1;

// draw shapes on the canvas
setInterval(function() {
  // erase canvas
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

  function Particle() {
    // establish starting positions and velocities
    this.x = settings.startingX;
    this.y = settings.startingY;
    //random X and Y velocities
    this.vx = Math.random() * 20 - 10;
    this.vy = Math.random() * 20 - 5;
    // add new particle to the index
    particleIndex ++;
    particles[particleIndex] = this;
    this.id = particleIndex;
    // a counter to use to determine when to have particle vanish
    this.life = 0;
  }

$( document ).ready(function(){

  document.body.appendChild(canvas);
  context.fillRect(0, 0, canvas.width, canvas.height);

  // setInterval();




});
