'use strict';

const wrapLi = document.querySelector('ul');
const listElements = document.querySelectorAll('li');
const liClick = function() {
        wrapLi.addEventListener('click', (e) => {
            let target = e.target;
            if (target.localName == 'li') {
                clear();
                let countLi;
                target.classList.add('active');
                countLi = +target.innerText;
                countLi++;
                target.innerText = countLi;
            }
    })
}
const clear = function() {
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].classList.remove('active');
    }
}

liClick();