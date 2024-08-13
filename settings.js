//------------------------------------------------------------------------------------------------------------------------------
//                                     TOGE-MD WHATSAPP BOT
//
//                                           V.1.2.0
//
//                               ▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀ 　 ▒█▀▄▀█ ▒█▀▀▄ 
//                               ░▒█░░ ▒█░░▒█ ▒█░▄▄ ▒█▀▀▀ 　 ▒█▒█▒█ ▒█░▒█ 
//                               ░▒█░░ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄ 　 ▒█░░▒█ ▒█▄▄▀
//
//------------------------------------------------------------------------------------------------------------------------------
//**
* @project_name : TOGE-MD
* @Developer : TOGE INUMAKI
* @Version : v.1.2.7
* @license : APACHE-2.0

THIS PROJECT IS MADE UNDER THE CIRCUMSTANCES OF "APACHE-2.0"
MEANS ANY KIND OF (MISLEADING, RE-UPLOADING, RENG) WILL LEAD YOU
TO A DMCA REPORT FROM THE OFFICIAL GITHUB, WHICH RESULT IN 
REMOVING UR COPIED/RE-UPLOADED PROJECT FROM THERE, IN SOME
CONDITIONS IT CAN LEADS TO TERMINATE UR ACCOUNT FROM THAT PLATFORM

│• @C_holder : toge12345

**/

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: kenzo3146" //ur yt chanel name
global.socialm = "GitHub: toge012345" //ur github or insta name
global.location = "Africa, Gabon, Libreville" //ur location

//new
global.botname = '𝐓𝐎𝐆𝐄-𝐌𝐃' //ur bot name
global.ownernumber = ['242066328691'] //ur owner number, dont add more than one
global.ownername = 'DARK JOKER' //ur owner name
global.websitex = "https://toge-md-web.onrender.com"
global.wagc = "https://whatsapp.com/channel/0029VaiuD4s4IBhI0fzbv40Z"
global.themeemoji = '🛠️'
global.wm = "𝐓𝐎𝐆𝐄_𝐁𝐎𝐓 𝐈𝐧𝐜 ✨"
global.botscript = 'https://github.com/toge012345/TOGE-MD' //script link
global.packname = "Sticker By"
global.author = "𓆩𝐓𝐎𝐆𝐄𓆪 ✇ ◤✞𝐈𝐍𝐔𝐌𝐀𝐊𝐈"
global.creator = "24102150169@s.whatsapp.net"
global.xprefix = '!'
global.premium = ["24105114159"] // Premium User

//channel id
global.xchannel = {
	jid: '1203632993333611780@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['!']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
