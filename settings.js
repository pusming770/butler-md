/*
          𝗖𝗥𝗘𝗗𝗜𝗧𝗦 & 𝗟𝗜𝗖𝗘𝗡𝗦𝗘 (𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 𝗣𝗘𝗡𝗚𝗚𝗨𝗡𝗔𝗔𝗡)            
                𓍢ִ໋🧪  ⚠︎  ⫘  </> ⫘  ⚠︎  🧪𓍢ִ໋               
 
 Dengan menggunakan script ini, Anda secara otomatis menyetujui 
 Ketentuan & Lisensi yang berlaku di bawah ini:

 ⚠️  𝗦𝗬𝗔𝗥𝗔𝗧 & 𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 𝗨𝗧𝗔𝗠𝗔:

 [𝟬𝟭] 𝗗𝗜𝗟𝗔𝗥𝗔𝗡𝗚 𝗞𝗘𝗥𝗔𝗦 𝗠𝗘𝗠𝗣𝗘𝗥𝗝𝗨𝗔𝗟𝗕𝗘𝗟𝗜𝗞𝗔𝗡 𝗦𝗖𝗥𝗜𝗣𝗧 𝗜𝗡𝗜!
      Script ini dibagikan secara gratis untuk komunitas. Siapa pun 
      dilarang keras mengambil keuntungan komersial dalam bentuk 
      apa pun dari script ini.
   
 [𝟬 dos] 𝗗𝗜𝗟𝗔𝗥𝗔𝗡𝗚 𝗠𝗘𝗡𝗚𝗛𝗔𝗣𝗨𝗦 𝗔𝗧𝗔𝗨 𝗠𝗘𝗡𝗚𝗨𝗕𝗔𝗛 𝗖𝗥𝗘𝗗𝗜𝗧𝗦!
      Anda dilarang keras mengubah, menyembunyikan, atau menghapus 
      nama Pembuat Asli (Author/Developer) baik yang ada di dalam 
      file kode, tampilan menu, maupun log console saat script 
      dijalankan. Hargailah karya pembuatnya jika ingin dihargai.

 [𝟬𝟯] 𝗞𝗘𝗧𝗘𝗡𝗧𝗨𝗔𝗡 𝗥𝗘-𝗦𝗛𝗔𝗥𝗘 & 𝗠𝗢𝗗𝗜𝗙𝗜𝗞𝗔𝗦𝗜:
      Jika Anda ingin membagikan ulang (re-share) atau memodifikasi 
      script ini, Anda 𝗪𝗔𝗝𝗜𝗕 mencantumkan link repository asli 
      atau memberikan kredit penuh kepada pembuat asli.

 [𝟬𝟰] 𝗣𝗘𝗡𝗢𝗟𝗔𝗞𝗔𝗡 𝗝𝗔𝗠𝗜𝗡𝗔𝗡 (𝗡𝗢 𝗪𝗔𝗥𝗥𝗔𝗡𝗧𝗬):
      Script ini disediakan "apa adanya" tanpa jaminan apa pun. 
      Segala risiko yang timbul akibat penggunaan script ini (seperti 
      terkena banned, error akibat modifikasi mandiri, dll.) sepenuhnya 
      menjadi tanggung jawab pengguna masing-masing.
*/



require("./bulter")
const fs = require('fs')

global.owner = "6289654546833", "62895338244443" //NOMOR OWNER
global.nobot = "62895338244443" //NOMOR BOT
global.nomorowner = '6289654546833' //NOMOR OWNER
global.namaowner = "NullXHeavenn" //NAMA OWNER LO
global.namaBot = "𝐁𝐮𝐭𝐥𝐞𝐫𝐁𝐨𝐭" //NAMA BOT LO
global.thumnail2 = "https://files.catbox.moe/5smjrp.jpg" //REPLY IMAG
global.replyimg = "https://files.catbox.moe/9wv2er.jpeg" //REPLY IMAGE
global.creator = `${owner}@s.whatsapp.net` //GAUSAH LO OPREK
global.foother = `© ${namaBot}` //GAUSAH LO OPREK
global.ppowner = 'https://files.catbox.moe/15spaj.png' //PROFILE OWNER
global.versi = "New NullXHeavenn" //JANGAN LO UBAH
global.menuBg = 'https://files.catbox.moe/nb8of6.jpeg' //THUMBNAIL MENU LO
global.idch = "120363407329772045@newsletter" //UBAH PAKE IDCH LO
global.linkSaluran = "https://whatsapp.com/channel/0029Vb7MGFI7j6g0cOofOn1a" //SAMA UBAH JUGA
//KALO MAU GANTI BACKGROUND WELCOME/GOODBYE UBAH AJA
global.welcomeBg = 'https://files.catbox.moe/qbihzq.jpg'
//UBAH SESUKA LO
global.mess = {
    owner: "You are not owner",
    prem: "You are not premium",
    group: "Only group command",
    admin: "You are not Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Only Private Chat",
    done: "Done"
}
//===BAGIAN STORE UNTUK PAYMENT GETWA =====
global.midtransServerKey = 'Mid-server-fQzUOPYrl3Zcwg-c4oqK4IWo';
global.midtransClientKey = 'Mid-client-bqZddljpxmUbuL8w';
global.midtransProduction = false;
global.paymentMode = 'both';
//==================================


//===GAUSAH LO UBAH APA APA =====
global.mute = false
global.onlygc = false
global.allowedGroupIds = global.allowedGroupIds || [""];
global.nama = namaBot
global.namach = nama
global.namafile = foother
global.author = namaowner
global.welcome = true
global.leave = true
global.antitags = false
global.welcomeMessage = "awkawkwwk"
global.leaveMessage = "awkww yatim oit"
global.autoreadsw = false
global.autoreactsw = false
global.autoreactemoji = '😂'
global.prefix = ".", "/", "#", "?", "/"
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.keyopenai = "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"
global.packname = nama
global.author = namaBot
//==================================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})