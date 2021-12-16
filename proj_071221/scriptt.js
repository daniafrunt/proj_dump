'use strict';

class Circle {
    constructor(circle) {
        this.circle = document.querySelector(circle);
    }
    mouseMoveEvent(e) {
        console.dir(e);
        this.mouseX = e.pageX;
        this.mouseY = e.pageY;
        this.circle.style.left = `${this.mouseX-25}px`;
        this.circle.style.top = `${this.mouseY-25}px`;
    }
    mouseMove() {
        window.addEventListener('mousemove', this.mouseMoveEvent.bind(this));   
    }
}

const circle = new Circle('.circle');

circle.mouseMove();