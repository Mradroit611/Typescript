"use strict";
//--------------------------------- Singleton pattern -------------------------------------------
class SingletonCounter {
    constructor() {
        this.count = 0;
    }
    static getInstance() {
        if (!SingletonCounter.instance) {
            SingletonCounter.instance = new SingletonCounter();
        }
        return SingletonCounter.instance;
    }
    increment() {
        this.count++;
    }
    getCount() {
        return this.count;
    }
}
SingletonCounter.instance = null;
// Usage
let singletonCounter1 = SingletonCounter.getInstance();
singletonCounter1.increment();
singletonCounter1.increment();
let singletonCounter2 = SingletonCounter.getInstance(); // Same instance as singletonCounter1
singletonCounter2.increment();
console.log("Singleton Counter 1 count:", singletonCounter1.getCount()); // Output: Singleton Counter 1 count: 2
console.log("Singleton Counter 2 count:", singletonCounter2.getCount()); // Output: Singleton Counter 2 count: 3
//----------------------------- Non-Singleton pattern ------------------------------------------
class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
    getCount() {
        return this.count;
    }
}
// Usage
let counter1 = new Counter();
counter1.increment();
counter1.increment();
let counter2 = new Counter(); // New instance
counter2.increment();
console.log("Counter 1 count:", counter1.getCount()); // Output: Counter 1 count: 2
console.log("Counter 2 count:", counter2.getCount()); // Output: Counter 2 count: 1
