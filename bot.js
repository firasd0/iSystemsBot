const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

let childProcess = require('child_process').spawn(
      'java', ['-jar', 'iSystemsBot.jar']
    );

childProcess.stdout.on('data', function(data) {
    console.log(data);
});

childProcess.stderr.on("data", function (data) {
    console.log(data);
});
