const Utils = require("../utils/Utils");

class NumSetting extends Utils {
    constructor(name, description, defaultValue, increment, minValue, maxValue) {
        super();
        this.name = name;
        this.description = description;
        this.current = defaultValue;
        this.increment = increment;
        this.min = minValue;
        this.max = maxValue;
    }

    getName() {return this.name;}
    getDescription() {return this.description;}
    getValue() {return this.current;}
    getIncrement() {return this.increment;}
    getMinValue() {return this.min;}
    getMaxValue() {return this.max;}
    set(value) {
        if (Utils.NumberUtils().isNumber(value)) {
            if (value >= this.min && value <= this.max) {
                this.current = value;
                return true;
            } else return false;
        } else return false;
    }
    add(times) {
        var asdad = [];
        var old = this.current;
        for (let i = 0; i < times; i++) {
            if (this.current + this.increment <= this.max) {
                this.current += this.increment;
                asdad.push(true)
            } else asdad.push(false);
        }
        var ok = asdad.some(x => x == false)
        if (ok) { this.current = old; return false }
        else return true
    }
    sub(times) {
        var asdad = [];
        var old = this.current;
        for (let i = 0; i < times; i++) {
            if (this.current - this.increment >= this.min) {
                this.current -= this.increment;
                asdad.push(true)
            } else asdad.push(false);
        }
        var ok = asdad.some(x => x == false)
        if (ok) { this.current = old; return false }
        else return true
    }
}

module.exports = NumSetting;