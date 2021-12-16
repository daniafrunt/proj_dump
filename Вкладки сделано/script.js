'use strict';

class Tab {
    constructor(tabsChose, tabsAll) {
        this.tabsChose = document.querySelector(tabsChose);
        this.tabsContent = document.querySelectorAll(tabsAll);
    }
    tabClick(e) {
        let target = e.target;
        if (target.tagName == 'A') {
            return target.parentElement;
        }
    }
    tabChose(clicked) {
        this.tabsChose.querySelectorAll('li').forEach(function (e) {
            e.classList.remove('activeChose');
        })
        clicked.classList.add('activeChose');
        this.tabsContent.forEach(function (elem) {
            if (elem.id == clicked.querySelector('a').id) {
                elem.classList.add('activeTab');
            }
        })
        console.log(clicked.querySelector('a').hash)
    }
    tabEnable(active) {
        active.classList.remove('activeTab');
    }
    svoystva(e) {
        this.activeChose = document.querySelector('.activeChose');
        this.activeTab = document.querySelector('.activeTab');
        this.clickedChose = this.tabClick(e);
        this.tabEnable(this.activeTab);
        this.tabChose(this.clickedChose);
    }
    init() {
        this.tabsChose.addEventListener('click', this.svoystva.bind(this))
    }
}

const tabsChoser = '#tabs ul';
const tabAll = '#tabs div';

const ob = new Tab(tabsChoser, tabAll);

ob.init();