// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step()
};

MakeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var newTimeBetweenSteps = this.timeBetweenSteps;
  setTimeout(this.step.bind(this), newTimeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
MakeDancer.prototype.setLeft = function(){
  this.$node.addClass('zero')
}

MakeDancer.prototype.free = function(){
  this.$node.removeClass('zero')
}
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// MakeDancer.prototype.setPosition(this.top, this.left);
