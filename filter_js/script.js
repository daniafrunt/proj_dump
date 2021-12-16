'use strict'

const containerFilterColor = document.querySelector('.filters__color');
const containerFilterShape = document.querySelector('.filters__shape');
const filtersColor = document.querySelectorAll('.filters__color li');
const filtersShapes = document.querySelectorAll('.filters__shape li');
const buttonReset = document.querySelector('.clear');
const buttonFilter = document.querySelector('.add');
const elementsToFilter = document.querySelectorAll('.elements__item');
const counterDiv = document.querySelector('.total');

const filterSelect = function (filterColor, filterShape) {
    filterColor.addEventListener('click', (ev) => {
        let target = ev.target;
        if (target.tagName == 'LI') {
            target.classList.toggle('active');
        }
    })
    filterShape.addEventListener('click', (ev) => {
        let target = ev.target;
        if (target.tagName == 'LI') {
            target.classList.toggle('active');
        }
    })
}
const elementFilter = function (button, elements, filterArrayColor, filterArrayShape, counter) {
    button.addEventListener('click', () => {
        let datasetVariable;
        let activeColor = document.querySelectorAll('.filters__color .active');
        let activeShape = document.querySelectorAll('.filters__shape .active');
        if (activeColor.length != 0 && activeShape.length != 0) {
            filterArrayColor.forEach((elemColor) => {
                filterArrayShape.forEach((elemShape) => {
                    filterBoth(elemColor, elemShape, elements);
                    console.log('оба');
                    return;
                })
            })
        }
        if (activeShape.length == 0) {
            datasetVariable = 'color';
            filterArrayColor.forEach((elem) => {
                filterColor(elem, elements, datasetVariable);
                console.log('цвет');
                return;
            })
        }
        if (activeColor.length == 0) {
            datasetVariable = 'shape';
            filterArrayShape.forEach((elem) => {
                filterColor(elem, elements, datasetVariable);
                console.log('форма');
                return;
            })
        }
        counterTotal(counter);
    })
}
const filterColor = function(filter, elements, datasetVar) {
    elements.forEach((elem) => {
        if (filter.dataset[datasetVar] == elem.dataset[datasetVar] && filter.classList.contains('active')) {
            elem.classList.add('active');
        }
    })
}
const filterBoth = function(filterColor, filterShape, elements) {
    elements.forEach((elem) => {
        if (filterColor.dataset.color == elem.dataset.color && filterColor.classList.contains('active')) {
            if (filterShape.dataset.shape == elem.dataset.shape && filterShape.classList.contains('active')) {
                elem.classList.add('active');
            }
        }
    })
}
const resetAll = function (button, filterColor, filterShape, filtrables, counter) {
    button.addEventListener('click', () => {
        filterColor.forEach((elem) => {
            elem.classList.remove('active');
        })
        filterShape.forEach((elem) => {
            elem.classList.remove('active');
        })
        filtrables.forEach((elem) => {
            elem.classList.remove('active');
        })
        counter.innerText = '0';
    })
}
const counterTotal = function(counter) {
    let allActiveElements = document.querySelectorAll('.elements .active');
    counter.innerText = allActiveElements.length;
}

filterSelect(containerFilterColor, containerFilterShape);
resetAll(buttonReset, filtersColor, filtersShapes, elementsToFilter, counterDiv);
elementFilter(buttonFilter, elementsToFilter, filtersColor, filtersShapes, counterDiv);
counterTotal(counterDiv);