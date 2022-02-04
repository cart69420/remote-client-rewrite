const Settings = require("../settings/Settings");

class Command extends Settings {
    constructor(name, description) {
        super();
        this.name = name;
        this.description = description;
    }

    getName() { return this.name; }
    getDescription() { return this.description; }
}

module.exports = Command;