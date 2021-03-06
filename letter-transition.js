(function($){
  
  $.fn.lt = function(options){
    
    var settings = {
      speed: 80,
      start: 'HELLO',
      end: 'WORLD', 
      // letterSpacing: 1,
      stopAfter: 5,
      uppercase: 1,
      startRandom: 0, 
      reset: 1,
    }; 
    
    if(options){$.extend(settings, options)}
    
    var rnd = Math.random; 
    var flr = Math.floor;
    var _this = $(this); 
    
    if(settings.uppercase){
      var alphanum = '1234567890qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
    }else{
      var alphanum = '1234567890qwertyuiopasdfghjklzxcvbnm'.split('');
    }
    
    if(settings.startRandom){
      var _thisLen = _this.text().length;
      console.log(_thisLen); 
      var rw = '';
      for(var i=0; i<_thisLen; i++){
        if(rw % flr(rnd() * 100) === 0){
          rw += ' '; 
          i += 1; 
        }
        rw += alphanum[flr(rnd() * alphanum.length)];
      }
      settings.start = rw; 
      settings.end = _this.text();
      settings.reset = 1; 
    }
    
    if(settings.reset){
      _this.text(''); 
    }
    
    if(settings.start.length === settings.end.length || 1){
      var start = settings.start; 
      var end = settings.end; 
      var len = settings.start.length; 
      
      for(var i=0; i<len; i++){
        _this.append(`<span>${start[i]}</span>`); 
        // _this.css('letter-spacing', settings.letterSpacing+'px'); 
      }
      
      var randomnesscounter = 0;
      var lencounter = 0;  
      
      function reveal(str){
        var reveal_timer = setInterval(function(){
          _this.children(`span:nth-child(${lencounter+1})`).text(str[lencounter]); 
          lencounter = lencounter + 1; 
          if(lencounter === len){
            clearInterval(reveal_timer); 
          }
        }, settings.speed); 
      }
      
      var start_randomness = setInterval(function(){
        var nralphanum = flr(rnd() * alphanum.length);
        var ralphanum = alphanum[nralphanum];
        _this.children(`span:nth-child(${flr(rnd() * len) + 1})`).text(ralphanum); 
        
        randomnesscounter++; 
        var secondspassed = settings.speed * (randomnesscounter / 1000); 
        if(secondspassed >= settings.stopAfter && settings.stopAfter != -1){
          clearInterval(start_randomness); 
          reveal(settings.end); 
        }
      }, settings.speed); 
      
    }else{
      console.error(`Start word length and End word length does not match. Start word has ${settings.start.length} (${settings.start}) letters and End word has ${settings.end.length} (${settings.end})`); 
    }
    
  }
  
})(jQuery);