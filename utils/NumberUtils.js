class NumberUtils {
    static isNumber(value) {
        try {
            if (typeof eval(value) == "number") return true; 
            else return false;
        } catch(err) {return false;}
    }
    static isFloat(value) {
        if (this.isNumber(value)) {
            if (value.toString().indexOf(".") != -1) return true;
            else return false;
        } else return false;
    }
}

module.exports = NumberUtils;