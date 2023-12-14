const pieceX = document.querySelector('#pieceX');
const pieceY = document.querySelector('#pieceY');
const pieceDiv = document.querySelector('#piece');
const okButton = document.querySelector('#ok');
const errorDiv = document.querySelector('#error');
const successDiv = document.querySelector('#success');
const attemptsSpan = document.querySelector('#attempts');
let attempts = 3;

const distanceTo = (x1, y1, x2, y2) =>
    Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Work here...
