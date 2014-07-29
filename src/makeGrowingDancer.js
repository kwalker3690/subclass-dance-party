var GrowingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.oldStep = Dancer.prototype.step;
GrowingDancer.prototype.step = function(){
  this.oldStep();

  var borderStyle = {
    "border-radius": "50%",
    "border-width": Math.random()*100 + "px"
  };

  this.$node.animate(borderStyle, 'slow');
  this.$node.addClass("growing-dancer")
};
