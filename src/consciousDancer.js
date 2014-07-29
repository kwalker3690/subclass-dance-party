var MakeConsciousDancer = function(top, left, timeBetweenSteps){
  MakeMovingDancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 1000;

  this.setPosition(top, left);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = this.step;
  this.collideCheck()


};
MakeConsciousDancer.prototype = Object.create(MakeMovingDancer.prototype);
MakeConsciousDancer.prototype.constructor = MakeMovingDancer;

MakeConsciousDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeConsciousDancer.prototype.step = function(){

  this.oldStep();
  var horzposition = $("body").width() * Math.random();
  var vertposition = $("body").width() * Math.random();
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

MakeConsciousDancer.prototype.collideCheck = function(){
  var $dancers = $('.conscious-dancer')
  var positions = [];
  for(var i = 0; i < $dancers.length; i++){
    positions.push({'top': $dancers[i].offsetTop, 'left': $dancers[i].offsetLeft})
  }

  for(var j = 0; j < positions.length; j++){
    for(var k=0; k<positions.length; k++){
      // console.log('position' + positions[j]['top'] + " " + positions[k]['top'])
      if(j !== k){
        if(positions[j]['top']/20 === positions[k]['top']/20){
          $($dancers[j]).offset({top: positions[j]['top']*-1, left: positions[j]['left']*-1});
          $($dancers[k]).offset({top: positions[k]['top']*-1, left: positions[k]['left']*-1});
          console.log('hit')
        }
      }
    }
  }
  // console.log(positions)
  setTimeout(this.collideCheck.bind(this), 100);
  // while(true){

  // }
}
