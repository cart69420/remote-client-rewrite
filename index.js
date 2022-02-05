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
const tpcommand = require("./commands/follow");

modules.set("example", new examplemodule());
commands.set("clip", new examplecommand());
commands.set('follow', new tpcommand());

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

process.bot.on("physicTick", () => {
    modules.forEach((module) => {
        if (module.getState()) module.onTick();
    })
})

process.bot.on("moduleToggled", (module) => {
    console.log(module.getName() + ": " + module.getState());
    if (module.getState()) module.onEnable();
    else module.onDisable();
})

})()