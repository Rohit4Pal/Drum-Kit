let x = document.querySelectorAll("button");
//console.log(x.length);

for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    //console.log(this.innerText);
    play(this.innerText);
  });
  x[i].addEventListener("keydown", function (event) {
    var x=String.fromCharCode(event.keyCode);
    console.log(x.toLowerCase());
    play(x.toLowerCase());
  });
}

const play = (c) => {
  var playAudio;
  switch (c) {
    case "w":
      playAudio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      playAudio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      playAudio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      playAudio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      playAudio = new Audio("sounds/crash.mp3");
      break;
    case "k":
      playAudio = new Audio("sounds/kick.mp3");
      break;
    default:
      playAudio = new Audio("sounds/snare.mp3");
      break;
  }
  playAudio.play();
};
