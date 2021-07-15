const Discord = require ('discord.js');

const client = new Discord.Client ();

// Connection
client.on ("ready", () => {
   console.log ("Ready!");
});

// TIPS: If "Ready message is displayed in the console, your bot is online.
// MP message
client.on ('guildMemberAdd', member => {
   member.createDM (). then (channel => {
     return channel.send ('yourmessage' + member.displayName);
   }). catch (console.error);
})


// WARNING: Avoid putting the token from your personal account, it will be banned quickly.
// TIP: You can send more ads in MP if it's the token of your account, because it will send your ad to newcomers from
// ALL THE SERVERS YOU ARE IN!

// TOKEN
client.login ("Token");