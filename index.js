const mineflayer = require("mineflayer")
const Settings = require("./settings/Settings")

//const bot = mineflayer.createBot({
//    host: process.argv[2] || "localhost",
//    port: process.argv[3] || 25565,
//    username: process.argv[4] || "remoteclient",
//    version: process.argv[5] || false,
//})

const modules = new Map();
const commands = new Map();

const examplemodule = require("./modules/Example")
const examplecommand = require("./commands/Example");

modules.set("example", new examplemodule());
commands.set("example", new examplecommand());

console.log(modules.get('example'))
console.log(commands.get('example'))
modules.get('example').onEnable()
commands.get('example').onExecute(['test', 'owow'])