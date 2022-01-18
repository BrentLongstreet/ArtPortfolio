document.getElementById("card").addEventListener("mouseover", mouseOver);
document.getElementById("card-2").addEventListener("mouseover", mouseOver);
document.getElementById("card-3").addEventListener("mouseover", mouseOver);
var audio = document.getElementById("audio");

function mouseOver() {
  audio.play();
}
