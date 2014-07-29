var ColorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.oldStep = Dancer.prototype.step;
ColorDancer.prototype.step = function(){
  this.oldStep();

  var borderStyle = {
    "border-color": this.getRandomColor()
  };

  this.$node.css(borderStyle);
  this.$node.addClass("color-dancer")
};


