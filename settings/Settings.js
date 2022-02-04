const NumSetting = require("./NumSetting");
const ModeSetting = require("./ModeSetting");
const ListSetting = require("./ListSetting");
const BooleanSetting = require("./BooleanSetting");
const StringSetting = require("./StringSetting");

class Settings {
    static NumSetting(...args) { return new NumSetting(...args); }
    static ModeSetting(...args) { return new ModeSetting(...args); }
    static ListSetting(...args) { return new ListSetting(...args); }
    static BooleanSetting(...args) { return new BooleanSetting(...args); }
    static StringSetting(...args) { return new StringSetting(...args); }

    get NumSetting() { return NumSetting; }
    get ModeSetting() { return ModeSetting; }
    get ListSetting() { return ListSetting; }
    get BooleanSetting() { return BooleanSetting; }
    get StringSetting() { return StringSetting; }
}

module.exports = Settings;