const Discord = require('discord.js');
const client = new Discord.Client();


client.login('NTA4Njg1MDgwNDc5MjY4OTAz.DsC1rQ.r_Kieyh7ojnTcR6Ua2fF5kLgEvc');
let prefix = "p ";
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
  
  if (message.content.startsWith(prefix + "youtube")) {
    message.channel.send("https://www.youtube.com/channel/UC4KN0anLirlTsn95Ugrroeg");
  }

  if (message.content === 'join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

const dispatcher = connection.play('/home/discord/audio.mp3');

dispatcher.pause();
dispatcher.resume();

dispatcher.setVolume(0.5); // half the volume

dispatcher.on('finish', () => {
  console.log('Finished playing!');
});

dispatcher.destroy(); // end the stream
