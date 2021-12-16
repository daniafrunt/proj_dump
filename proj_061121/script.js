'use strict';

const mainButton = document.querySelector('.button'),
      mainBlock = document.querySelector('.block'),
      circlesBlock = mainBlock.querySelector('.block_circles'),
      circlesCount = mainBlock.querySelector('.block_counter'),
      colorsArray = ['#234fd7', '#ffffff', '#343434', '#000000'];

const blockClick = function(container, button) {
    button.addEventListener('click', () => {
        let circleBlock = document.createElement('div');
        circleBlock.classList.add('circle');
        circleBlock.style.backgroundColor = colorsArray[colorGiver()];
        container.insertAdjacentElement('afterbegin', circleBlock);
        circleCounter();
    })
}
const circleCounter = function() {
    let count = circlesBlock.querySelectorAll('.circle').length;
    circlesCount.innerText = count;
}
const colorGiver = function() {
    let color = Math.random() * colorsArray.length;
    return Math.round(color);
}

blockClick(circlesBlock, mainButton);