const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ">"
var token = process.env.TOKEN

bot.on('ready', () => {
  console.log(`Connecté en tant que ${bot.user.tag}! \n \n`);
  bot.user.setActivity(">help")
});

bot.on('message', msg => {

  //Commande ping
  if (msg.content == '>ping') {
    msg.reply('🏓 Pong!');
    console.log(`Commande ping \n Utilisateur : \n    Pseudo -> ${msg.author.tag} \n    Identifiant -> ${msg.author.id} \n Où : \n    Nom du serveur & ID du serveur -> ${msg.guild.name} & ${msg.guild.id} \n    Nom & ID du salon -> ${msg.channel.name} & ${msg.channel.id}`)
  }

   //Commande invites
  if (msg.content == '>invites') {
    msg.reply('⛓️ Invitation du bot 🌅・ChillDay : https://discord.com/oauth2/authorize?client_id=810108507470561300&permissions=0&scope=bot !');
    console.log(`Commande ping \n Utilisateur : \n    Pseudo -> ${msg.author.tag} \n    Identifiant -> ${msg.author.id} \n Où : \n    Nom du serveur & ID du serveur -> ${msg.guild.name} & ${msg.guild.id} \n    Nom & ID du salon -> ${msg.channel.name} & ${msg.channel.id}`)
  }

   //Commande help
  if (msg.content == '>help') {
    msg.reply('🌅・ChillDay Help : >ping : Ping-Pong ! >invites : pour avoir linvitation du bot!');
    console.log(`Commande ping \n Utilisateur : \n    Pseudo -> ${msg.author.tag} \n    Identifiant -> ${msg.author.id} \n Où : \n    Nom du serveur & ID du serveur -> ${msg.guild.name} & ${msg.guild.id} \n    Nom & ID du salon -> ${msg.channel.name} & ${msg.channel.id}`)
  }


});

bot.login('ODEwMTA4NTA3NDcwNTYxMzAw.YCe2Vw.pSJzB0-ZAKg5T0dptCyHtHbnGTE');