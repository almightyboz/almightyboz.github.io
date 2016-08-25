// initialize and empty canvas and place it on the page
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

// initial starting position
var posX = 150;
var posY = 200;

$( document ).ready(function(event){

  document.body.appendChild(canvas);


  // $('canvas').on("mousemove", function( event ) {

  //   posX = event.pageX;
  //   posY = event.pageY;

    // console.log("Position x is "+ posX);
    // console.log("Position Y is "+ posY);


      var particles = {};
      var particleIndex = 0;

      var settings = {
        density: 2,
        particleSize: 1,
        startingX: posX,
        startingY: posY,
        gravity: 0.5,
        // groundLevel: canvas.height * 0.75,
        // leftWall: canvas.width * 0.25,
        // rightWall: canvas.width * 0.75,
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
      this.maxLife = 10;
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
      context.clearRect(0, 0, settings.groundLevel, canvas.width, canvas.height);
      context.beginPath();
      context.fillStyle="#ffffff";
      context.arc(this.x, this.y, settings.particleSize, 0, Math.PI*2, true);
      context.closePath();
      context.fill();
    };

    function makeParticles() {
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
        if (Math.random() > 0.5) {
          new Particle();
        }
      }
      //draw each particles
      for (var j in particles) {
        particles[j].draw();
      }
    }

    setInterval(makeParticles(), 30);

  // });



});
