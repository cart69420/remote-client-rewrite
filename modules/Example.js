const Module = require("./Module");

class ExampleModule extends Module {
    constructor() {
        super("Example", "An example module", "Example");
        this.addSetting(new this.BooleanSetting("ExampleSetting", "Example setting", true));
        this.tick = 0;
    }

    onEnable() {}
    
    onTick() {
        this.tick++;
        if (this.tick % 20 == 0) {
            this.bot.chat("1 second has passed");
        }
    }

    onDisable() {
        this.tick = 0;
    }
}

module.exports = ExampleModule;