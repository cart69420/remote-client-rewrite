const Settings = require("../settings/Settings");

class Module extends Settings {
    constructor(name, description, category) {
        super();
        this.name = name;
        this.description = description;
        this.category = category;
    }

    getName() { return this.name; }
    getDescription() { return this.description; }
    getCategory() { return this.category; }
    getSettings() { return this.settings; }

    addSetting(setting) {
        if (setting instanceof this.BooleanSetting || setting instanceof this.NumSetting || 
            setting instanceof this.ModeSetting || setting instanceof this.ListSetting || 
            setting instanceof this.StringSetting) {

            this[setting.getName()] = setting;
            return true;
        
        } else return false;
    }
}

module.exports = Module;