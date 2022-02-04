const Module = require("./Module");

class ExampleModule extends Module {
    constructor() {
        super("Example", "An example module", "Example");
        this.addSetting(new this.BooleanSetting("ExampleSetting", "Example setting", true));
    }

    onEnable() {
        console.log(this["ExampleSetting"].getValue());
    }
}

module.exports = ExampleModule;