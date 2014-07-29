var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.audioHTML = '<audio src="src/jump.mp3" autoplay></audio>';
  this.step();
  this.setPosition(top, left);
  // this.collideCheck();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setLeft = function(){
  this.$node.addClass('zero')
};

Dancer.prototype.free = function(){
  this.$node.removeClass('zero')
};

Dancer.prototype.getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

Dancer.prototype.collideCheck = function(){
  var $dancers = $('.dancer');
  var positions = [];
  for(var i = 0; i < $dancers.length; i++){
    positions.push({'top': $dancers[i].offsetTop, 'left': $dancers[i].offsetLeft})
  };

  var ouchSpan = '<span class="ouch">"Ouch!"</span>';

  for(var j = 0; j < positions.length; j++){
    for(var k=0; k<positions.length; k++){
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
        };
      };
    };
  };
  setTimeout(this.collideCheck.bind(this), 100);
};

Dancer.prototype.audio = function(){
  $('body').append(this.audioHTML);
};

Dancer.prototype.bounce = function(){
  this.$node.animate({'border-width':'200px'}, 'fast').animate({'border-width':'10px'}, 'fast');
};

