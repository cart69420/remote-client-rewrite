const Command = require("./Command");
const Vec3 = require("vec3");

class ExampleCommand extends Command {
    constructor() {
        super("clip", "An example command");
    }

    onExecute([...args]) {
        this.bot.entity.position.add(new Vec3(args[0], args[1], args[2]))
    }
}

module.exports = ExampleCommand;