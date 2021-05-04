document.getElementById("mouse").addEventListener("mouseover", mouseOver);
document.getElementById("mouse").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("mouse").style.color = "red";
}

function mouseOut() {
  document.getElementById("mouse").style.color = "black";
}