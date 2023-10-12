// Delegation
function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if (this.contains(targetElement)) {
            handler.call(targetElement, event);
        }
    });
}

function randomNumber(from, to) {
    return Math.floor(Math.random() * to) + from;
}

// Init

function adversaryGuess() {

}

function cellAvailable(cell) {

}

function createGrid(size) {

}

