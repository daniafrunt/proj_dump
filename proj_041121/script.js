'use strict';

const divPick = document.querySelector('.img_pick');
const imgShow = document.querySelector('.img_show img');
const textPar = document.querySelector('.img_show p');
const imgSelect = function(container) {
    container.addEventListener('click', (e) => {
        let target = e.target;
        if (target.tagName == 'IMG') {
            imgClear(divPick);
            target.classList.add('img_picked');
            imgLoad(imgShow, target, textPar);
        }
    })
}
const imgClear = function(container) {
    container.querySelectorAll('img').forEach((ele) => {
        ele.classList.remove('img_picked');
    });
}
const imgLoad = function(img, imgPick, par) {
    let imgSRC = imgPick.getAttribute('src');
    let imgALT = imgPick.getAttribute('alt');
    img.setAttribute('src', imgSRC);
    par.innerText = imgALT;
}
imgSelect(divPick);