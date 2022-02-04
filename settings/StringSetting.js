class StringSetting {
    constructor(name, description, defaultValue, maxLength=Infinity) {
        this.name = name;
        this.description = description;
        this.value = defaultValue;
        this.maxLength = maxLength;
    }

    getName() { return this.name; }
    getValue() { return this.value; }
    getDescription() { return this.description; }
    getMaxLength() { return this.maxLength; }
    getLength() { return this.value.length; }
    set(value) {
        if (typeof value == "string") {
            if (value.length <= this.maxLength) {
                this.value = value;
                return true;
            } else return false;
        } else return false;
    }
}

module.exports = StringSetting;