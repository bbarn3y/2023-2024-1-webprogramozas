function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

class Bird {
    constructor() {}
}

class Column {
    constructor() {
    }
}

const canvas = document.getElementById('flappyCanvas');
const context = canvas.getContext('2d');

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
}

function update(dt) {

}

cycle();