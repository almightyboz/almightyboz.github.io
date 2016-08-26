// initialize and empty canvas and place it on the page
var canvas = document.createElement("canvas");
// $('<canvas/>', { id: 'mycanvas', height: canHeight, width: canWidth});
var context = canvas.getContext("2d");
canvas.width = $(window).width();
canvas.height = $(window).height();
// canvas.z-index = 0;

var colorArray = ['#FFDBFB', '#EFD7FF', '#BDFFEA', '#FAFBDF'];

$( document ).ready(function(event){

  document.body.appendChild(canvas);

    var particles = {};
    var particleIndex = 0;

    var settings = {
      density: 20,
      particleSize: 0.5,
      startingX: Math.random() * canvas.width,
      startingY: Math.random() * canvas.height,
      gravity: 0.5,
      color: "#ffffff"
      // groundLevel: canvas.height * 0.75,
      // leftWall: canvas.width * 0.25,
      // rightWall: canvas.width * 0.75,
    };

    function Particle() {
      // establish starting positions and velocities
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      //random X and Y velocities
      this.vx = Math.random() * 15 - 10;
      this.vy = Math.random() * 15 - 5;
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
      context.fillStyle = settings.color;
      context.arc(this.x, this.y, settings.particleSize, 0, Math.PI*2, true);
      context.closePath();
      context.fill();
    };

    setInterval(function() {
          // erase canvas
    context.fillStyle = "black";
    context.fillRect(0,0, canvas.width, canvas.height);
    // generate the particles
    for (var i = 0; i < settings.density; i++) {
      if (Math.random() > 0.5) {
        new Particle();
      }
    }
    //draw each particles
    for (var j in particles) {
      particles[j].draw();
    }
    }, 30);

    $('canvas').on('click', function(event) {
      var newColor = colorArray[Math.round(Math.random() * 4)];
      settings.color = newColor;

      if (settings.gravity == 0.5) {
        settings.gravity = -0.5;
      } else {
        settings.gravity = 0.5;
      }
    });

    $(canvas).append("<p style='z-index: 1; color: white'>Woooo</p>");

});
