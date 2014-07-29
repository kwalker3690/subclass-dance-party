// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.audioHTML = '<audio src="src/jump.mp3" autoplay></audio>';
  this.step();
  this.collideCheck()
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

MakeDancer.prototype.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

MakeDancer.prototype.collideCheck = function(){
  var $dancers = $('.dancer')
  var positions = [];
  for(var i = 0; i < $dancers.length; i++){
    positions.push({'top': $dancers[i].offsetTop, 'left': $dancers[i].offsetLeft})
  }

  var ouchSpan = '<span class="ouch">"Ouch!"</span>'

  for(var j = 0; j < positions.length; j++){
    for(var k=0; k<positions.length; k++){
      // console.log('position' + positions[j]['top'] + " " + positions[k]['top'])
      if(j !== k){
        if(positions[j]['top']/20 === positions[k]['top']/20 || positions[j]['left']/20 === positions[k]['left']/20){
          $($dancers[j]).css({"border-color": this.getRandomColor()});
          $($dancers[k]).css({"border-color": this.getRandomColor()});
          $('body').append(ouchSpan);
          $('.ouch').offset({top: positions[j]['top'], left: positions[k]['left']})
          if($('.ouch')){
            $('.ouch').toggle();
          }
          console.log('hit')
        }
      }
    }
  }
  setTimeout(this.collideCheck.bind(this), 100);
}

MakeDancer.prototype.audio = function(){
  $('body').append(this.audioHTML)
}

MakeDancer.prototype.bounce = function(){
  this.$node.animate({'border-width':'200px'}, 'fast').animate({'border-width':'10px'}, 'fast')
}

