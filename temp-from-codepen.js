var letters = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

var rnd = Math.random;
var flr = Math.floor; 

var c = 0; 
var k = 0; 

function reveal(str){
  var si1 = setInterval(function(){
    $(`h1 span:nth-child(${k+1})`).text(str[k]);
    console.log(k); 
    k = k + 1; 
    if(k === 5){
      clearInterval(si1); 
    }
  }, 150); 
}

var si = setInterval(function(){
  var rletter = flr(rnd() * letters.length); 
  $(`h1 span:nth-child(${flr(rnd() * 5) + 1})`).text(letters[rletter]);
  c+=1; 
  // console.log(c);
  if(c === 50){
    clearInterval(si); 
    reveal('HELLO'); 
  }
}, 100);