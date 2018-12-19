const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message',async msg => {//mrx
    if(msg.channel.type === "dm") return;//mrx
    if(msg.author.bot) return;//mrx
    if(msg.content.startsWith(prefix + "#c.t")) {//mrx
    if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **يجب ان تمتلك رتبه **');//mrx
    if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **البوت لا يمتلك صلاحية**');//mrx
    var kk = msg.guild.createChannel('Info', 'category').then(kk => {//mrx
    var v = msg.guild.createChannel('Welcome', 'text').then(v => {//mrx
    var d = msg.guild.createChannel('Chat', 'text').then(d => {//mrx
    var f = msg.guild.createChannel('bot', 'text').then(f => {//mrx
    var r = msg.guild.createChannel('bo7', 'text').then(r => {//mrx
    var a = msg.guild.createChannel('pic', 'text').then(a => {//mrx
    var q = msg.guild.createChannel('cut', 'text').then(q => {//mrx
    var j = msg.guild.createChannel('log', 'text').then(j => {//mrx
    var m = msg.guild.createChannel('admin-chat', 'text').then(m => {//mrx
      v.setParent(kk);//mrx
      d.setParent(kk);//mrx
      f.setParent(kk);//mrx
      r.setParent(kk);//mrx
      a.setParent(kk);//mrx
      q.setParent(kk);//mrx
      j.setParent(kk);//mrx
      m.setParent(kk);// mrx
      msg.channel.sendMessage('**Channels Text Done**')//mrx
    })//mrx
  
  })//mrx
})//mrx
})
})
    })//mrx
  })//mrx
})
    })//mrx

}
});


client.on('message',async msg => {
    if(msg.channel.type === "dm") return;
    if(msg.author.bot) return;//mrx
    if(msg.content.startsWith(prefix + "#c.v")) {
    if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('? **يجب ان تمتلك رتبه **');//mrx
    if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('? **البوت لا يمتلك صلاحية**');//mrx
    var dd = msg.guild.createChannel('▬▬▬Public▬▬▬', 'category').then(dd => {//mrx
    var cc = msg.guild.createChannel('♧ Ξ〖 🎤  سواليف 📣  〗', 'voice').then(cc => {//mrx
    var ee = msg.guild.createChannel('♢ Ξ〖 🎤 مواهب 🎵  〗', 'voice').then(ee => {//mrx
    var ss = msg.guild.createChannel('❋ Ξ〖 🎈فعاليات 🏅 〗', 'voice').then(ss => {//mrx
    var gg = msg.guild.createChannel('❋ Ξ〖  🕋 القرآن الكريم  〗', 'voice').then(gg => {
    var kk = msg.guild.createChannel('▬▬▬Private▬▬▬', 'category').then(kk => {//mrx
    var v = msg.guild.createChannel('✿Tow✿', 'voice').then(v => {
    var d = msg.guild.createChannel('✿Three✿', 'voice').then(d => {
    var f = msg.guild.createChannel('✿Four✿', 'voice').then(f => {
    var r = msg.guild.createChannel('✿Five✿', 'voice').then(r => {//mrx
    var a = msg.guild.createChannel('✿Six✿', 'voice').then(a => {
      v.setParent(kk);
      d.setParent(kk);//mrx
      f.setParent(kk);//mrx
      r.setParent(kk);
            // part 2
      a.setParent(dd);//mrx
      ee.setParent(dd);
      cc.setParent(dd);
      ss.setParent(dd);//mrx//mrx
      gg.setParent(dd);
      a.setParent(dd);//mrx
      msg.channel.sendMessage('**Channels Voice Done**')//mrx
    })//mrx//mrx//mrx
  
})
})
})
})
  })
})
})
  })
})
    })

}
});
  client.login(process.env.BOT_TOKEN);
