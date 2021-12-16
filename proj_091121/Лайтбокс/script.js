'use strict';


class Lightbox {
    constructor({imgs, openImg, openOverlay}) {
        this.imagesContainer = document.querySelectorAll(imgs);
        this.animOpenImg = openImg;
        this.animOpenOverlay = openOverlay;
    }
    lightboxGen() {
        const newLBox = document.createElement('div');
        newLBox.classList.add('overlay');
        newLBox.innerHTML = `<div class="pic animate__animated">
            <div class="close">+</div>
            <img src="images/pic01.jpg">
            <h5>hhh</h5>
            </div>`;
        newLBox.classList.add('animate__animated');
        newLBox.classList.add(this.animOpenOverlay);
        document.body.insertAdjacentElement('beforeend', newLBox);
    }
    lBoxCloseEvent() {
        this.lBox.style.display = 'none';
        this.lBoxDiv.style.display = 'none';
        this.lBox.classList.remove(this.animOpenOverlay);
        this.lBoxDiv.classList.remove(this.animOpenImg);
    }
    lBoxClose() {
        this.closeButton.addEventListener('click', this.lBoxCloseEvent.bind(this));
    }
    getElems() {
        this.lBox = document.querySelector('.overlay');
        this.lBoxDiv = this.lBox.querySelector('.pic');
        this.closeButton = this.lBox.querySelector('.close');
        this.lBoxImage = this.lBox.querySelector('img');
        this.lBoxPar = this.lBox.querySelector('h5');
    }
    callBackFunction() {
        this.lBoxDiv.style.display = 'flex';
        this.lBoxDiv.classList.add(this.animOpenImg);
    }
    imageClickEvent(e) {
        let target = e.target;
        if (target.tagName == 'IMG') {
            this.lBox.style.display = 'flex';
            setTimeout(this.callBackFunction.bind(this), 1000);
        }
    }
    imageClickElems(elem) {
        elem.addEventListener('click', this.imageClickEvent.bind(this));
    }
    imageClick() {
        this.imagesContainer.forEach(this.imageClickElems.bind(this));
    }
    librCheck() {
        const newLink = document.createElement('link');
        newLink.setAttribute('rel', 'stylesheet');
        newLink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
        document.head.insertAdjacentElement('beforeend', newLink);
    }
    init() {
        this.librCheck();
        this.lightboxGen();
        this.getElems();
        this.imageClick();
        this.lBoxClose();
    }
}

const imagesAll = {
    imgs: '.lightbox',
    openImg: 'animate__bounceIn',
    openOverlay: 'animate__fadeIn'
};

const lightbox = new Lightbox(imagesAll);

lightbox.init();





// const lightboxImg = document.querySelector('body');
// 
// const addModalWindow = function() {
//     const divOverlay = document.createElement('div');
//     document.body.insertAdjacentElement('beforeend', divOverlay);
//     divOverlay.innerHTML = '<div class="overlay"><div class="pic"><div class="close">+</div><img src="images/pic01.jpg"><h5>Дом с химерами</h5></div></div>';
// }
// const showModalWindow = function(container) {
//     container.addEventListener('click', (e) => { 
//         let target = e.target;
//         let divOverlay = document.querySelector('.overlay');
//         let overlayImg = divOverlay.querySelector('img');
//         if (target.classList.contains('lightbox')) {
//             divOverlay.style.display = 'flex';
//             overlayImg.setAttribute('src', target.getAttribute('src'));
//         }
//     })
// }
// const closeModalWindow = function(container) {
//     container.addEventListener('click', (e) => {
//         let target = e.target;
//         let divOverlay = document.querySelector('.overlay');
//         if (target.classList.contains('close')) {
//             divOverlay.style.display = 'none';
//         }
//     })
// }
//
// addModalWindow();
// showModalWindow(lightboxImg);
// closeModalWindow(lightboxImg);