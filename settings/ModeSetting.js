class ModeSetting {
    constructor(name, description, defaultValue, options) {
        this.name = name;
        this.description = description;
        this.current = defaultValue;
        this.options = options;
    }

    getName() {return this.name;}
    getDescription() {return this.description;}
    getValue() {return this.current;}
    getOptions() {return this.options;}
    set(value) {
        if (this.options.includes(value) && !Array.isArray(value)) {
            this.current = value;
            return true;
        } else return false;
    }
}

module.exports = ModeSetting;