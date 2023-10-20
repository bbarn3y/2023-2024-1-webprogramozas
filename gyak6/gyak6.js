function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

class Bird {
    constructor(context, x, y, width, height, velocity, acceleration) {
        
    }

    draw() {

    }

    update(dt) {

    }
}

class Column {
    constructor() {
    }
}

const canvas = document.getElementById('flappyCanvas');
const context = canvas.getContext('2d');

const bird = new Bird();

let previousUpdate = performance.now();
function cycle(now = performance.now()) {
    // console.log('cycle');
    const dt = now - previousUpdate;
    previousUpdate = now;

    update(dt);
    draw();

    requestAnimationFrame(cycle);
}

function draw() {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.moveTo(0, 50);
    context.lineTo(25, 0);
    context.lineTo(50, 50);
    context.lineTo(0, 50);
    context.closePath();
    context.stroke();
}

function update(dt) {

}

cycle();