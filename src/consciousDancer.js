var ConsciousDancer = function(top, left, timeBetweenSteps){
  MovingDancer.call(this, top, left);
  this.timeBetweenSteps = 1000;
  this.setPosition(top, left);
};

ConsciousDancer.prototype = Object.create(MovingDancer.prototype);
ConsciousDancer.prototype.constructor = MovingDancer;

ConsciousDancer.prototype.oldStep = Dancer.prototype.step;
ConsciousDancer.prototype.step = function(){
  this.oldStep();

  var horzposition = $("body").width() * Math.random();
  var vertposition = $("body").height() * Math.random();
  var borderStyle = {
    'top' : vertposition + 'px',
    'left' : horzposition + 'px'
  };

  this.$node.animate(borderStyle, 'slow');
  this.$node.addClass("conscious-dancer")
};

