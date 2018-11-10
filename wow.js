const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;


console.log("Silence Creed V.1.0");


let tokens = [];
let passedTokens = [];
let t = 0;


function check(config)   {
    tokens = config.tokens;

    // Because JS (No pointers)
    exports.proxies = proxies;
    exports.tokens = tokens;

    let proxy = proxies[p];
    let token = tokens[t];
}
 
client.on("message", (message) => {
 const prefix = config.prefix;
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
  
  if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;
  
  if (command === "Hai") {
    message.channel.send("Hai :)");

  }
  
});


client.login(config.awawawaw2);
