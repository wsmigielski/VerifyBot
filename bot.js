const Discord = require("discord.js");
const bot = new Discord.Client();
const config =  require("./config.json");
const suffix = config.suffix;

bot.on('ready', () => {
  console.log(`Ready to kick people :)))`);
});

bot.on('guildMemberAdd', member => {
    if ((Date.now() - member.user.createdTimestamp) < 86400000) {
        if (!member.guild.me.hasPermission('KICK_MEMBERS') return console.log(`Insufficient permissions in guild ${member.guild.name}.');
        member.kick("Account was too fresh").catch(console.error);
    }
});

bot.login(config.token);
