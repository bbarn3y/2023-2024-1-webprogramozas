function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        bird.velocity -= 100;
    }
})

class Bird {
    image;
    constructor(context, x, y, width, height, velocity, acceleration) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.image = new Image();
        this.image.src = './assets/bird.png';
    }

    draw() {
        this.context.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    update(dt) {
        this.velocity += this.acceleration * dt / 1000;
        this.y += this.velocity * dt / 1000;
    }
}

class Column {
    constructor() {
    }
}

const canvas = document.getElementById('flappyCanvas');
const context = canvas.getContext('2d');

const bird = new Bird(context, 50, 175, 50, 50, 30, 100);

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

    bird.draw();
}

function update(dt) {
    bird.update(dt);
}

cycle();