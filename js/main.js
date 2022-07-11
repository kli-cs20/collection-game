// Collection JS Game
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

// Set Canvas Size
cnv.width = 600;
cnv.height = 400;


// Player Object
let player = {
  x: 300,
  y: 200,
  w: 25,
  h: 25,
  speed: 5
}

// Blocks
let blocks = initBlocks(50);

// Main Draw Loop
window.addEventListener("load", draw);

function draw() {
  // LOGIC
  movePlayer();
  eatBlocks();

  // DRAW
  background();
  drawPlayer();
  drawBlocks();

  requestAnimationFrame(draw);
}

// Helper Functions
function background() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height)
}

function drawPlayer() {
  ctx.strokeStyle = "white";
  ctx.strokeRect(player.x, player.y, player.w, player.h);
}

function movePlayer() {
  if (keyPressed["ArrowUp"]) {
    player.y += -player.speed;
  } else if (keyPressed["ArrowDown"]) {
    player.y += player.speed;
  }
  
  if (keyPressed["ArrowLeft"]) {
    player.x += -player.speed;
  } else if (keyPressed["ArrowRight"]) {
    player.x += player.speed;
  }
}

// Initialize an array with n random blocks
function initBlocks(n) {
  let temp = [];
  for (let num = 1; num <= n; num++) {
    temp.push(newRandomBlock());
  }
  return temp;
}

// Return a random block
function newRandomBlock() {
  return {
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    w: 15,
    h: 15,
  }
}

// Draw all blocks
function drawBlocks() {
  ctx.fillStyle = "green";
  for (let i = 0; i < blocks.length; i++) {
    drawBlock(blocks[i]);
  }
}

// Draw a single block
function drawBlock(block) {
  ctx.fillRect(block.x, block.y, block.w, block.h);
}

// Check if player beside any blocks
function eatBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    if (rectCollide(player, blocks[i])) {
      blocks.splice(i, 1);
      break;
    }
  }
}

