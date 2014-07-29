var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;


};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeBlinkyDancer.prototype.step = function(){

  this.oldStep();
  // call the old version of step at the beginning of any call to this new version of step

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass("blinky-dancer")
  this.$node.toggle();
};
