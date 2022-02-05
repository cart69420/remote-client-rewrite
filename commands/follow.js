const Command = require("./Command");
const Vec3 = require("vec3");
const Utils = require("../utils/Utils");

class FollowCommand extends Command {
    constructor() {
        super("follow", "follow <player>");
    }

    onExecute([...args]) {
        this.bot.entity.yaw = this.bot.players[args[0]].entity.yaw
        this.bot.entity.pitch = this.bot.players[args[0]].entity.pitch
        this.bot.entity.position = this.bot.players[args[0]].entity.position
    }
}

module.exports = FollowCommand;