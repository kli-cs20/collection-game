// Collection JS Game
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

// Set Canvas Size
cnv.width = 600;
cnv.height = 400;

// Global Variables
let score = 0;
let scoreThreshold = 50;
let areasFound = 1;
let areasCleared = 0;

// Player Object
let player = {
  x: 300,
  y: 200,
  w: 25,
  h: 25,
  speed: 5
}

// Blocks
let color = "green";
let blocks = initBlocks(50);

// Main Draw Loop
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  movePlayer();
  eatBlocks();
  if (outOfMap(player)) {
    newMap();
  }

  // DRAW
  background("black");
  drawPlayer();
  drawBlocks();
  showScore();

  requestAnimationFrame(draw);
}


