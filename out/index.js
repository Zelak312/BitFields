"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BitField {
    constructor() {
        this.map = new Map();
    }
    set(key) {
        if (this.map.has(key))
            return;
        this.map.set(key, 1 << this.map.size);
    }
    has(number, key) {
        if (!this.map.has(key))
            return false;
        const bit = this.map.get(key);
        return ((number & bit) === bit);
    }
    all(number) {
        const obj = {};
        this.map.forEach((bit, val) => {
            if ((number & bit) === bit)
                obj[val] = true;
            else
                obj[val] = false;
        });
        return obj;
    }
    get(key) {
        return this.map.get(key);
    }
    number(bits) {
        let number = 0;
        Object.keys(bits).forEach((bitKey) => {
            if (!this.map.has(bitKey))
                throw new Error("No Key found for " + bitKey);
            if (bits[bitKey])
                number |= this.map.get(bitKey);
        });
        return number;
    }
}
exports.BitField = BitField;
