var DogDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.audioHTML = '<audio src="src/dog-lick.mp3" autoplay></audio>';
};

DogDancer.prototype = Object.create(Dancer.prototype);
DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.oldStep = Dancer.prototype.step;
DogDancer.prototype.step = function(){
  this.oldStep();

  var borderStyle = {
    "border-radius": "50%",
    "border-width": Math.random()*100 + "px"
  };

  this.$node.animate(borderStyle, 'slow');
  this.$node.addClass( "dog-dancer")
};
