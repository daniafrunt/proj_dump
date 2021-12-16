'use strict';

class List {
    constructor(list, button) {
        this.list = document.querySelector(list);
        this.button = document.querySelector(button);
        this.docElem = document.documentElement;
    }
    buttonClickEvent() {
        this.list.classList.toggle('active_block');
        this.list.classList.remove('active_up');
        let coords = this.list.getBoundingClientRect();
        if (coords.bottom > this.docElem.clientHeight) {
            this.list.classList.add('active_up');
        }
    }
    buttonClick() {
        this.button.addEventListener('click', this.buttonClickEvent.bind(this));
    }
}   

const list = new List('.list', '.button');

list.buttonClick();