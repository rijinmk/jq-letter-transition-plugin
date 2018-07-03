# Introduction
This jQuery plugin is to have a letter transition effect for same length charecters. In other words it gives that "brute force" password cracking effect. Heres a random video showing how it kinda looks like: [Brute Force Password effect](https://www.youtube.com/watch?v=XUV5fPDJGKc&feature=youtu.be&t=5m15s). 

## Setup
All we need is an HTML element `<p> <div> <h1>`, Any HTML element. Then we have to call a jQuery function `.lt()` on that HTML element. 
```javascript
$('h1').lt(); 
```
This is all you need to set it. This will set the HTML element with starting word as **HELLO** and it will show a brute-forced animation to **WORLD**. If my explanation is unclear, Here's a video: [Letter transition init](https://www.instagram.com/p/BkX8Ku-hPjt/). 

## Settings
Currently for this version, these are the settings: 
* `speed` - In microseconds (1000ms = 1s)

  > This says "How fast" should the animation be, as in how fast should it "look". The faster the speed the faster the bruteforcing will feel. By default it's 80ms
  
* `start` - String

  > This is the starting word, By default its "HELLO". 
  
* `end` - String

  > This is the ending word, By default its "WORLD". 
  
* `stopAfter` - Seconds

  > As the name suggests, This tells how fast the animation should end. By default its 5s, that means after 5 seconds the `end` will start to appear. 

These are the main settings. 

## Outerview
Say the `speed` is **80ms**, `start` word is **"HELLO"** and `end` word is **"WORLD"**. `stopAfter` is **5s**. This means when the `.lt()` is called. The word **HELLO** will be added to the HTML element and then hello will change to **H34LD** --> **D30L1** --> **930L0** to other random charecters, and this animation will lasts for 5 seconds and it will change at the speed of 80ms. Heres a video showing the effect. [Letter transition effect](https://www.instagram.com/p/BkX8Ku-hPjt/). 

## Quick start Demo
Just copy this into an HTML document and run it for a Quick Start. 
```html
<h1>GOOD</h1>
<button>CHANGE</button>

<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="https://cdn.rawgit.com/rijinmk/jq-letter-transition-plugin/master/letter-transition.min.js"></script>
<script>
    $('button').click(function(){
    $('h1').lt({
      start: 'GOOD',
      end: 'BAAI',  
      stopAfter: 1,
      speed: 100,
    });
  });
</script>
```

