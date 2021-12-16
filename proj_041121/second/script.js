'use strict';

const divMenu = document.querySelector('.menu');
const contentAll = document.querySelectorAll('.content div');
const menuPick = function(container) {
    container.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('menu_el')) {
            classRemove(divMenu);
            target.classList.add('menu_el--active');
            contentClear(contentAll);
            contentAppear(contentAll, target.id);
        }
    })
}
const classRemove = function(container) {
    container.querySelectorAll('.menu_el').forEach((element) => {
        element.classList.remove('menu_el--active')
    })
}
const contentAppear = function(container, choseId) {
    container.forEach((element) => {
        if (element.classList.contains(choseId)) {
            element.classList.add('content_page--active');
        }
        console.log(element);
        console.log(container, choseId)
    })
}
const contentClear = function(container) {
    container.forEach((element) => {
        element.classList.remove('content_page--active');
    })
}
menuPick(divMenu);