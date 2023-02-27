/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const greet = {
    firstName: 'Maria',
    sayHello() {
        return `Hello, I'm ${this.firstName}`;
    }
};

const calc = {
    total: 0,
    add(num) {
        return this.total += num;
    },
    subtract(num) {
        return this.total -= num;
    },
    clear() {
        this.total = 0;
    }
};

module.exports = { greet, calc };
