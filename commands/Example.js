const Command = require("./Command");

class ExampleCommand extends Command {
    constructor() {
        super("ExampleCommand", "An example command");
    }

    onExecute([...args]) {
        console.log(args);
    }
}

module.exports = ExampleCommand;