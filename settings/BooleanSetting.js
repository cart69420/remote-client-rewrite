class BooleanSetting {
    constructor(name, description, defaultValue) {
        this.name = name;
        this.description = description;
        this.value = defaultValue;
    }

    getName() {return this.name;}
    getValue() {return this.value;}
    getDescription() {return this.description;}
    set(boolean) {
        if (typeof boolean == "boolean") {
            this.value = boolean;
            return true;
        } else return false;
    }
    switch() {
        this.value = !this.value;
        return this.value;
    }
}

module.exports = BooleanSetting;