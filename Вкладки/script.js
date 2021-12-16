'use strict';

class Tab {
	constructor(tabsChose, tabsAll) {
		this.tabsChose = document.querySelector(tabsChose);
		this.tabsContent = document.querySelectorAll(tabsAll);
	}
	// tabsChoseClear(activeTab) {
	// 	activeTab.classList.remove('activeChose');
	// 	console.dir(this.tabActive.querySelector('a'));
	// }
	// tabsChoseSelect(target) {
	// 	target.parentElement.classList.add('activeChose');
	// }
	// tabsContentClear() {
	// 	this.tabContentActive = document.querySelector('.activeTab');
	// 	this.tabContentActive.classList.remove('activeTab');
	// }
	// tabsContentSelect(elem) {
	// 	if (elem.id == this.tabActive.querySelector('a').getAttribute('href')) {
	// 		elem.classList.add('activeTab');
	// 		}
	// 	console.dir(this.tabActive.querySelector('a').getAttribute('href'));
	// }
	// tabsContentActivation() {
	// 	this.tabsContentClear();
	// 	this.tabsContent.forEach(this.tabsContentSelect.bind(this));
	// }
	// tabsChoseActivation(e) {
	// 	let target = e.target;
	// 	if (target.tagName == 'A') {
	// 		this.tabsChoseClear(this.tabActive);
	// 		this.tabsChoseSelect(target);
	// 	}
	// 	this.tabsContentActivation();
	// }
	// active() {
	// 	this.currentLi = ;		
	// 	this.tabActiveA = this.tabActive.querySelector('a');

	// }
	// tabsChoseClick() {
	// 	this.tabsChose.addEventListener('click', this.tabsChoseActivation.bind(this));
	// }

	tabClick(e) {
		let target = e.target;
		if (target.tagName == 'A') {
			return target.parentElement;
		}
	}
	svoystva(e) {
		this.activeChose = document.querySelector('.activeChose');
		this.activeTab = document.querySelector('.activeTab');
		this.clickedChose = this.tabClick(e);
		console.dir(this);
	}
	init() {
		this.tabsChose.addEventListener('click', this.svoystva.bind(this))
	}
}

const tabsChoser = '#tabs ul';
const tabAll = '#tabs div';

const ob = new Tab(tabsChoser, tabAll);

ob.init();