const readline = require("readline");
const fs = require('fs')
const exec = require('child_process')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("\x1b[37mBot Maker! Provide a name. \x1b[36m➢ ", function(name) {
	    console.log(`\x1b[37mCreated bot name \x1b[36m${name}`);
        rl.question("\x1b[37mProvide a token \x1b[36m➢ ", function(token) {
        fs.writeFileSync(`${name}.js`, `const { Client, Intents } = require('discord.js');\nconst client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });\n\n\n\nclient.login("${token}")`)
        console.log("Created!")
        fs.appendFile('bots.txt', `${name}\n`, function (err) {
  if (err) {
  	console.log(err)
  }
        rl.close();
});
});
});
rl.on("close", function() {
    console.log("Thanks for using.")
});
