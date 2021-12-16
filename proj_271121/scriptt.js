'use strict';

const wrapTimer = document.querySelector('.timer');
const timerDays = wrapTimer.querySelector('.timer_day');
const timerHours = wrapTimer.querySelector('.timer_hours');
const timerMinutes = wrapTimer.querySelector('.timer_minutes');
const timerSeconds = wrapTimer.querySelector('.timer_seconds');

class Timer {
    constructor(wrap, deadLine) {
        this.wrapper = document.querySelector(wrap);
        this.deadLineTime = new Date(deadLine);
        this.timerDays = this.wrapper.querySelector('.timer_day');
        this.timerHours = this.wrapper.querySelector('.timer_hours');
        this.timerMinutes = this.wrapper.querySelector('.timer_minutes');
        this.timerSeconds = this.wrapper.querySelector('.timer_seconds');
    }
    textTransform(value, type) {
        let valueFin;
        let wordFin;
        if ((value >= 0 && value <= 4) || value > 20) {
            if (value % 10 == 1) {
                wordFin = type[0];
            } else if (value % 10 > 0 && value % 10 <= 4) {
                wordFin = type[1]
            } else {
                wordFin = type[2];
            }
        } else {
            wordFin = type[2];
        }
        if (value < 10) {
            valueFin = `0${value}`;
        } else {
            valueFin = value;
        }
        return '<span>' + valueFin + '</span>' + '<span>' + wordFin + '</span>';
    }
    timer() {
        this.curDate = new Date();
        this.leftTime = new Date(this.deadLineTime - this.curDate);
        if (this.leftTime > 0) {
            this.timerDays.innerHTML = this.textTransform(this.leftTime.getDate(), ['День', 'Дня', 'Дней']);
            this.timerHours.innerHTML = this.textTransform(this.leftTime.getHours(), ['Час', 'Часа', 'Часов']);
            this.timerMinutes.innerHTML = this.textTransform(this.leftTime.getMinutes(), ['Минута', 'Минуты', 'Минут'])
            this.timerSeconds.innerHTML = this.textTransform(this.leftTime.getSeconds(), ['Секунда', 'Секунды', 'Секунд']);
        } else {
            this.wrapper.innerText = "Время вышло";
            // clearInterval(interval);
        }
    }
    init() {
        let interval = setInterval(this.timer.bind(this), 1000);
    }
}

const timer = new Timer('.timer', '2021-12-01T12:00:00');

timer.init();