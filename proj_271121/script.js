'use strict';

// class Calendar {
//     constructor(par) {
//         this.par = document.querySelector(par);
//         this.date = new Date();
//         this.months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июля', 'Июня', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
//     }
//     timeReturn(time) {
//         if (time < 10) {
//             return `0${time}`;
//         } else  {
//             return `${time}`;
//         }
//     }
//     timeSet() {
//         this.par.textContent = `Сегодня: ${this.date.getDate()} ${this.months[this.date.getMonth()]} ${this.date.getFullYear()}
//         Сейчас: ${this.date.getHours()}:${this.timeReturn(this.date.getMinutes())}:${this.timeReturn(this.date.getSeconds())}`;
//     }
//     timeShow() {
//         this.date = new Date();
//         this.timeSet();
//         setInterval(this.timeShow.bind(this), 1000);
//     }
// } 
class Deadline {
    constructor(timeHours, timeMinutes, timeSeconds, paragraph) {
        this.hours = timeHours;
        this.minutes = timeMinutes;
        this.seconds = timeSeconds;
        this.date = new Date();
        this.par = document.querySelector(paragraph);
    }
    timeCompare() {
        this.hoursCompared = this.hours - this.date.getHours();
        this.minutesCompared = this.minutes - this.date.getMinutes();
        this.secondsCompared = this.seconds - this.date.getSeconds();
    }
    timeReturn(time) {
        if (time < 10) {
            return `0${time}`;
        } else {
            return `${time}`;
        }
    }
    timeSet() {
        this.par.innerText = `До конца: ${this.hoursCompared}:${this.timeReturn(this.minutesCompared)}:${this.timeReturn(this.secondsCompared)}`
    }
    timeShow() {
        this.timeCompare();
        if (this.date.getHours() > this.hours && this.date.getMinutes() > this.minutes && this.date.getSeconds() > this.seconds) {
            setTimeout(this.timeShow.bind(this), 1000);
            this.par.innerText = `Просрочено`;
        } else {
            setTimeout(this.timeShow.bind(this), 1000);
            this.timeSet();
        }
    }
}

// const paragraph = '.date';

// const calendar = new Calendar(paragraph);

// calendar.timeShow();

const deadline = new Deadline(18, 0, 0, '.date');

deadline.timeShow();

console.dir(deadline)