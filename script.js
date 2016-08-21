function Particle(x,y) {
  this.x = this.oldX = x;
  this.y = this.oldY = y;
}

Particle.prototype.integrate = function() {
  var velocityX = this.x - this.oldX;
  var velocityY = this.y - this.oldY;
  this.oldX = this.x;
  this.oldY = this.y;
  this.x += velocityX;
  this.y +- velocityY;
};

Particle.prototype.attract = function(x, y){
  var dx = x - this.x;
  var dy = y - this.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  this.x =+ dx / distance;
  this.y += dy / distance;
};

for (var i=0; i < particles.length; i++) {
  particles[i].attract(mouse.x, mouse.y);
  particles[i].integrate();
  particles[i].draw();
}