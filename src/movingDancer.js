var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.oldStep = Dancer.prototype.step;
MovingDancer.prototype.step = function(){
  this.oldStep();

  var horzposition = $("body").width() * Math.random();
  var vertposition = $("body").width() * Math.random();
  var borderStyle = {
    'top' : vertposition + 'px',
    'left' : horzposition + 'px'
  };

  this.$node.animate(borderStyle, 'slow');
  this.$node.addClass("moving-dancer")
};
