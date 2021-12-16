'use strict';

class Calculator {
    constructor(type, square, button, result) {
        this.type = document.querySelector(type);
        this.square = document.querySelector(square);
        this.button = document.querySelector(button);
        this.result = document.querySelector(result);
    }
    calc() {
        this.typeValue = this.type.value;
        this.squareValue = this.square.value;
        return this.typeValue * this.squareValue;
    }
    print() {
        this.result.innerText = this.calc();
    }
    init() {
        this.button.addEventListener('click', this.print.bind(this));
    }
}

let t = '.type select';
let s = '.square input';
let b = '[type="submit"]';
let r = '.resultfin';

const c = new Calculator(t, s, b, r);

c.init();