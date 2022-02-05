if (process.argv.length < 6 || process.argv.length > 6) {
    console.log('Usage: node index.js <ip> <port> <bot_name> <version>');
    process.exit(1);
}

const mineflayer = require("mineflayer")

var create = (async() => {
process.bot = await mineflayer.createBot({
    host: process.argv[2] || "localhost",
    port: process.argv[3] || 25565,
    username: process.argv[4] || "remoteclient",
    version: process.argv[5] || false,
})

const modules = new Map();
const commands = new Map();

const examplemodule = require("./modules/Example")
const examplecommand = require("./commands/Example");
const followcommand = require("./commands/follow");

modules.set("tick", new examplemodule());
commands.set("clip", new examplecommand());
commands.set('follow', new followcommand());

process.bot.on("chat", (username, message) => {
    message = message.toLowerCase();
    if (message.startsWith("toggle")) {
        modules.get(message.split(" ")[1]).setToggled(!modules.get(message.split(" ")[1]).getState());
        process.bot.chat(message.split(" ")[1] + " has been " + (modules.get(message.split(" ")[1]).getState() ? "enabled" : "disabled"));
    } else {
        for (let [key, value] of commands) {
            if (message.startsWith(key)) {
                value.onExecute(message.split(" ").slice(1));
            }
        }
    }
})

var ticks = 0;
process.bot.on("physicTick", () => {
    process.bot.ticksExisted = ticks++;
    modules.forEach((module) => {
        if (module.getState() && typeof module.onTick == "function") module.onTick();
    })
})

process.bot.on("respawn", () => {
    modules.forEach((module) => {
        if (module.getState() && typeof module.onWorld == "function") module.onWorld();
    })
})

process.bot.on("kicked", (reason) => {
    modules.forEach((module) => {
        if (module.getState() && typeof module.onKick == "function") module.onKick();
    })
})

process.bot.on("death", () => {
    modules.forEach((module) => {
        if (module.getState() && typeof module.onDeath == "function") module.onDeath();
    })
})

process.bot.on("move", () => {
    modules.forEach((module) => {
        let last_pos = process.bot.entity.position.minus(process.bot.entity.velocity)
        if (module.getState() && typeof module.onMove == "function") module.onMove(last_pos);
    })
})

process.bot._client.on("packet", (packet, metadata) => {
    // might wanna read the docs before using this one
    modules.forEach((module) => {
        if (module.getState() && typeof module.onPacket == "function") module.onPacket(packet, metadata);
    })
})

process.bot.on("moduleToggled", (module) => {
    console.log(module.getName() + ": " + module.getState());
    if (module.getState()) module.onEnable();
    else module.onDisable();
})

})()