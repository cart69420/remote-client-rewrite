class ListSetting {
    constructor(name, description, defaultValue, options, max_choice) {
        this.name = name;
        this.description = description;
        this.value = defaultValue;
        this.options = options;
        this.max_choice = max_choice;
    }

    getName() { return this.name; }
    getValue() { return this.value; }
    getOptions() { return this.options; }
    getMaxChoice() { return this.max_choice; }
    set(value) {
        var old = this.value;
        var sad = [];
        if (Array.isArray(value) && value.length <= this.max_choice) {
            value.forEach(v => {
                if (this.options.includes(v)) {
                    sad.push(v);
                } else sad.push(false);
            });
        } else return false;
        var ok = sad.some(x => x == false)
        if (ok) { this.value = old; return false }
        else { this.value = sad; return true }
    }
    add(value) {
        if (!Array.isArray(value) && this.options.includes(value)) {
            if (this.value.includes(value)) return false;
            else {
                this.value.push(value); 
                if (this.value.length > this.max_choice) {
                    this.value.shift();
                }

                return true;
            }
        } else return false;
    }
}

module.exports = ListSetting;