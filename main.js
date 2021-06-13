require('dotenv').config();
const Discord = require("discord.js")
const https = require('https');
const client = new Discord.Client()
const settings = encodeURI('\\dpi{300} \\bg_white \\')

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)

})

client.on("message", msg => {
	if (msg.content.startsWith('!latex')) {
		let string = msg.content.substring(
			msg.content.indexOf('"')+1,
			msg.content.lastIndexOf('"')
		);
		
		string = encodeURIComponent(string.replace('\\', '\\\\'))

		let embed = new Discord.MessageEmbed()
		embed.setImage('https://latex.codecogs.com/png.latex?' + settings + string)
		msg.channel.send(embed)
	}
})


client.login(process.env.TOKEN)