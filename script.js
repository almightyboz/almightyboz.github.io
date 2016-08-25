// initialize and empty canvas and place it on the page
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

// draw a circle parties on the canvas
// var makeParticle = function(x, y, radius) {
//   context.beginPath();
//   context.fillStyle = "white"
//   // after setting fill style, draw an arc on the canvas
//   context.arc(x, y, radius, 0, Math.PI*2, true);
//   context.closePath();
//   context.fill();
// }

// initial starting position
var posX = 20;
var posY = 100;
// initial velocities
// var vx = 10;
// var vy = -10;
// var gravity = 1;

$( document ).ready(function(){

  document.body.appendChild(canvas);
  // context.fillRect(0, 0, canvas.width, canvas.height);
  // setInterval();
  var particles = {};
  var particleIndex = 0;

  var settings = {
    density: 20,
    particleSize: 10,
    startingX: canvas.width / 2,
    startingY: canvas.height / 4,
    gravity: 0.5,
    groundLevel: canvas.height * 0.75,
    leftWall: canvas.width * 0.25,
    rightWall: canvas.width * 0.75,
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
    this.maxLife = 100;
  }

  Particle.prototype.draw = function() {
    this.x += this.vx;
    this.y += this.vy;

    if ((this.y + settings.particleSize) > settings.groundLevel) {
      this.vy *= -0.6;
    }
    //Adjust for gravity
    this.vy += settings.gravity;
    // age the particle
    this.life++;
    // if the particle is old, remove it
    if (this.life >= this.maxLife) {
      delete particles[this.id];
    }
    // create the shapes
    context.clearRect(settings.leftWall, settings.groundLevel, canvas.width, canvas.height);
    context.beginPath();
    context.fillStyle="#ffffff";
    context.arc(this.x, this.y, settings.particleSize, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
  }

  // draw shapes on the canvas
  setInterval(function() {
    // erase canvas
    context.fillStyle = "black";
    context.fillRect(0,0, canvas.width, canvas.height);
    // draw a left and right wall and floor
    context.fillStyle= "white";
    context.fillRect(0, 0, settings.leftWall, canvas.height);
    context.fillRect(settings.rightWall, 0, canvas.width, canvas.height);
    context.fillRect(0, settings.groundLevel, canvas.width, canvas.height);
    // generate the particles
    for (var i = 0; i < settings.density; i++) {
      if (Math.random() > 0.97) {
        new Particle();
      }
    }
    //draw each particles
    for (var i in particles) {
      particles[i].draw();
    }
  }, 30);

});
