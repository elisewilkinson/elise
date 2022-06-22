var sound = document.querySelector('audio');
var buttons = document.querySelectorAll('button');

[].forEach.call(buttons, function(button) {
  button.onmouseover = function() {
    sound.currentTime = 0;
    sound.play();
  };
});

// abo! 
// var sound = document.querySelector('audio');
// var buttons = document.querySelectorAll('button');

// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].onmouseover = function() {
//     sound.currentTime = 0;
//     sound.play();
//   };
// }