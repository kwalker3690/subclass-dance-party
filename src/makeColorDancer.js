var MakeColorDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;


};
MakeColorDancer.prototype = Object.create(MakeDancer.prototype);
MakeColorDancer.prototype.constructor = MakeColorDancer;

MakeColorDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeColorDancer.prototype.step = function(){

  this.oldStep();
  // call the old version of step at the beginning of any call to this new version of step
  var borderStyle = {
    "border-color": this.getRandomColor()
  };
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css(borderStyle);
  this.$node.addClass("color-dancer")
};


