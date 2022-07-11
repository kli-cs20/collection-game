// Canvas Functions
// Requires global cnv and ctx variables

// Fill the canvas with provided color
function background(color) {
    fill(color);
    rect(0, 0, cnv.width, cnv.height, "fill");
}

function stroke(color) {
    ctx.strokeStyle = color;
}

function fill(color) {
    ctx.fillStyle = color;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function font(fontSetting) {
    ctx.font = fontSetting;
}

function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function circle(x, y, r, mode) {
    if (mode === "fill") {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
    if (mode === "fill") {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.stroke();
    }
}

function text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x, y)
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y);
    }
}

function ellipse(x, y, xRadius, yRadius, rotation, startAngle, endAngle, mode) {
    if (mode === "fill") {
        ctx.beginPath();
        ctx.ellipse(x, y, xRadius, yRadius, rotation, startAngle, endAngle);
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.beginPath();
        ctx.ellipse(x, y, xRadius, yRadius, rotation, startAngle, endAngle);
        ctx.stroke();
    }
}

function image(img, x, y, w, h) {
    ctx.drawImage(img, x, y, w, h);
}