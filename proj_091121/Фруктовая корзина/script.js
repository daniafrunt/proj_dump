'use strict';

const divContainerFrom = document.querySelector('.polka .tovar');
const divContainerTo = document.querySelector('.korzina .tovar');

const transferProduct = function (containerFrom, containerTo) {
  containerFrom.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName == 'IMG' && target.dataset.aviability == '0') {
      let newProduct = document.createElement('li');
      newProduct.innerHTML = target.parentElement.innerHTML;
      newProduct.classList = target.parentElement.classList;
      containerTo.insertAdjacentElement('beforeend', newProduct);
      productCounter();
      target.dataset.aviability++;
    }
  })
}
const productCounter = function() {
  let liAll = divContainerTo.querySelectorAll('.tovar__item');
  let counter = document.querySelector('.counter');
  counter.innerText = liAll.length;
  console.dir(liAll);
}
const removeProduct = function (container) {
  container.addEventListener('click', (e) => {
    let target = e.target;
    if (target.tagName == 'IMG') {
      target.parentElement.remove();
      productCounter();
    }
  })
}

transferProduct(divContainerFrom, divContainerTo);
removeProduct(divContainerTo);