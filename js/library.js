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