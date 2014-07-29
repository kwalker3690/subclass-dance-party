var MakeConsciousDancer = function(top, left, timeBetweenSteps){
  MakeMovingDancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 1000;

  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;


};
MakeConsciousDancer.prototype = Object.create(MakeMovingDancer.prototype);
MakeConsciousDancer.prototype.constructor = MakeMovingDancer;

MakeConsciousDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeConsciousDancer.prototype.step = function(){

  this.oldStep();
  var horzposition = $("body").width() * Math.random();
  var vertposition = $("body").height() * Math.random();
  // call the old version of step at the beginning of any call to this new version of step
  var borderStyle = {
    'top' : vertposition + 'px',
    'left' : horzposition + 'px'
  };
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate(borderStyle, 'slow');
  this.$node.addClass("conscious-dancer")
};

