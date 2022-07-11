// Helper Functions

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

// Check if player beside any blocks
function eatBlocks() {
    for (let i = 0; i < blocks.length; i++) {
      if (rectCollide(player, blocks[i])) {
        blocks.splice(i, 1);
        score++;
        break;
      }
    }
}
  
function drawPlayer() {
    stroke("white");
    rect(player.x, player.y, player.w, player.h, "stroke");
}

// Draw all blocks
function drawBlocks() {
    fill(color);
    for (let i = 0; i < blocks.length; i++) {
      drawBlock(blocks[i]);
    }
}
  
// Draw a single block
function drawBlock(block) {
    rect(block.x, block.y, block.w, block.h, "fill");
}



function showScore() {
    fill("white");
    font("15px Arial");
    text(`Score: ${score}`, 10, 20, "fill");
    text(`Areas Found: ${areasFound}`, 10, 35, "fill");
    text(`Areas Cleared: ${areasCleared}`, 10, 50, "fill");

    if (score === scoreThreshold) {
        score += 10;
        areasCleared++;
        // +10 points for clearing all blocks in an area
    }
}

function newMap() {
    areasFound++;
    player.x = 300;
    player.y = 200;
    blocks = [];
    scoreThreshold = score + 25;
    color = randomRGB();
    blocks = initBlocks(25);
}
  

  
