"use strict";
class Player {
    height;
    weight;
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    show() {
        return `${this.height} ${this.weight}`;
    }
}
let player1 = new Player(3, 5);
console.log(player1.show());
