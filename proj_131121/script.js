'use strict';

const myObject = {
    properties: function(n, c, p) {
        this.name = n;
        this.count = c;
        this.price = p;
    },
    summ: function() {
        return this.count*this.price
    },
    printRes: function() {
        console.log(this.summ());
    }
}

myObject.properties('A', 5, 10);
myObject.printRes();