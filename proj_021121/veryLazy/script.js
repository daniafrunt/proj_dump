'use strict';

const wrapDiv = document.querySelector('.container');
const decrementDiv = wrapDiv.querySelector('.decrement');
const calcNum = function(container, decrement) {
    container.addEventListener('click', (e) => {
        let target = e.target;   
        const countDiv = container.querySelector('.counter')
        if (target.classList.contains('decrement')) {
            if (+countDiv.innerText > 1){
                +countDiv.innerText--;
            }
        } else if (target.classList.contains('increment')) {
            +countDiv.innerText++;
        }
        unactiveDiv(+countDiv.innerText, decrement);
    })
}
const unactiveDiv = function(unactiveCounter, unactiveDecrement) {
    if (unactiveCounter > 1) {
        unactiveDecrement.classList.remove('unactive');
    } else {
        unactiveDecrement.classList.add('unactive');
    }
}
calcNum(wrapDiv, decrementDiv);