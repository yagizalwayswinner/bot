


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `<:yan:846088551648460890>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <:yan:846088551648460890>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:yan:846088551648460890>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<:yan:846088551648460890>  **Bot Sahibi**  <@806839429960302622> \n **Yagiz#0049** \n\n <:yan:846088551648460890> \ **Bot Geliştiricisi**  <@538744659162169344> \n **passie.#0007** \n\n <:yan:846088551648460890>  **Bot Sahibi**  <@788386674660474900> \n **Mârch#0001** \n`)
.addField("__**Sürümler**__", `<:yan:846088551648460890>  **Discord.js Sürümü** **|**  **v${Discord.version}** \n<:yan:846088551648460890>  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<:yan:846088551648460890>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<:yan:846088551648460890>  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setColor("#ffffff")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}