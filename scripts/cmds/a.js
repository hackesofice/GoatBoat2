const fs = require('fs');
const path = require('path');

module.exports.config = {
 name: "a",
 version: "1.0",
 role: 0,
 author: "OtinXSandip",
 countdown: 5,
 description: "Lists all available commands.",
 category: "Utility",
};

module.exports.onStart = async ({ api, event }) => {
 const commandsPath = path.join(__dirname, '..', 'commands');

 try {
 const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

 if (commandFiles.length === 0) {
 api.sendMessage("There are no commands available.", event.threadID);
 return;
 }

 const commandList = commandFiles.map(file => {
 const commandName = path.basename(file, '.js');
 const filePath = path.join(commandsPath, file);
 const commandModule = require(filePath);
 const commandConfig = commandModule.config;
 return `[File:] ${commandName}.js\n[Name] ${commandConfig.name}`;
 }).join('\n\n');

 const message = `Available commands:\n\n${commandList}`;
 api.sendMessage(message, event.threadID);
 } catch (error) {
 console.error('Error listing commands:', error);
 api.sendMessage("An error occurred while listing commands.", event.threadID);
 }
};