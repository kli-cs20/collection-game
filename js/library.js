// Library for Functions

// Collision of Two Rectangles
function rectCollide(rect1, rect2) {
    let rect1Top = rect1.y;
    let rect1Bot = rect1.y + rect1.h;
    let rect1Left = rect1.x;
    let rect1Right = rect1.x + rect1.w;
    let rect2Top = rect2.y;
    let rect2Bot = rect2.y + rect2.h;
    let rect2Left = rect2.x;
    let rect2Right = rect2.x + rect2.w;
  
    return rect1Top < rect2Bot && rect1Bot > rect2Top && rect1Left < rect2Right && rect1Right > rect2Left
  }

// Player Movement
let keyPressed = {};
document.addEventListener("keydown", (e) => keyPressed[e.code] = true);
document.addEventListener("keyup", (e) => keyPressed[e.code] = false);

// Return if player out of map
function outOfMap(object) {
  let objL = object.x;
  let objR = object.x + object.w;
  let objT = object.y;
  let objB = object.y + object.h;
  return objL > cnv.width || objR < 0 || objT > cnv.height || objB < 0;
}

// Return a random decimal between low (inclusive) and high (exclusive)
function randomDec(low, high) {
  return Math.random() * (high - low) + low
}

// Random Integer: low (inclusive) to high (exclusive)
function randomInt(low, high) {
  return Math.floor(randomDec(low, high))
}

// Random rgb color "rgb(__, __, __)"
function randomRGB() {
  return `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`
}
