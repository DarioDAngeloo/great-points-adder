let currentPoints = document.getElementById("current-points");
let count = 0;

function earnpoint() {
  count += 1;
  currentPoints.innerText = count;
}

function rmvPoint() {
  count -= 1;
  currentPoints.innerText = count;
}

function erase() {
  currentPoints.innerText = "0";
  count = 0;
}
