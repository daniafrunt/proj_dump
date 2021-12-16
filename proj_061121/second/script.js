'use strict';

const divFrom = document.querySelector('.from'),
      divTo = document.querySelector('.to');

const transportFig = function(containerFrom, containerTo) {
    containerFrom.addEventListener('click', (e) => {
        let target = e.target;
        if (target.tagName == 'IMG') {
            containerTo.insertAdjacentElement('beforeend', target);
        }
    })
}

transportFig(divFrom, divTo);