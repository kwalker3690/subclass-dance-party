var MakeGrowingDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;


};
MakeGrowingDancer.prototype = Object.create(MakeDancer.prototype);
MakeGrowingDancer.prototype.constructor = MakeGrowingDancer;

MakeGrowingDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeGrowingDancer.prototype.step = function(){

  this.oldStep();
  // call the old version of step at the beginning of any call to this new version of step
  var borderStyle = {

    "border-radius": "50%",
    "border-width": Math.random()*100 + "px"
  };
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate(borderStyle, 'slow');
  this.$node.addClass("growing-dancer")
};
