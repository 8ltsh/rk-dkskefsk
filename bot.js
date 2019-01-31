const Discord = require('discord.js');
const client = new Discord.Client();
const prefix =8
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.login(process.env.BOT_TOKEN);

client.on('message', message => {//Mrx - Dev
    if (message.content.startsWith(prefix + 'sug')) {//Mrx - Dev
        if (message.author.bot) return//Mrx - Dev
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//Mrx - Dev
        var args =  message.content.split(' ').slice(1).join(' ')//Mrx - Dev
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})//Mrx - Dev
        let Room = message.guild.channels.find(`name`, "suggestions")//Mrx - Dev
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))//Mrx - Dev
        let embed = new Discord.RichEmbed()//Mrx - Dev
        .setColor('RANDOM')//Mrx - Dev
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)//Mrx - Dev
       .addField('**Suggestion**',`${args}`)//Mrx - Dev
       .setThumbnail(message.author.avatarURL)//Mrx - Dev
       .setFooter(`ID: ${message.author.id}`)//Mrx - Dev
       Room.sendEmbed(embed).then(c => {//Mrx - Dev
           c.react('✅').then(() => //Mrx - Dev
               c.react('❌'))//Mrx - Dev
           
       }).catch(e => console.error(e)//Mrx - Dev
       )
   }//Mrx - Dev
});//Mrx - Dev

client.on("message", msg => {//So-92.#0885
    if(msg.author.bot) return;
if(msg.channel.type === 'dm') return;

let p = "!";//البرفكس
let msgarray = msg.content.split(" ");//So-92.#0885
let cmd = msgarray[0];//So-92.#0885
let args = msgarray.slice(1);

if(cmd === `${p}ban`){
    let bUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!bUser) return msg.channel.send("استخدم: `[ ${p}ban @user <السبب> ] مثال : ${p} @So-92.#0885 نشر`");
let breason = args.join(" ").slice(22);
if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("ليس لديك الصلاحية الكافية ❌").then(s => {
s.delete(1600);
})
 if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send("انا ليس لدي صلاحية كافية ❌").then(z => {
z.delete(1600);
})
if(bUser.hasPermission("BAN_MEMBERS")) return msg.channel.send("لا يمكنني ان احظر اداري").then(bs => {
bs.delete(1600);
})
//So-92.#0885
let banembed = new Discord.RichEmbed()
.setDescription("~ban~")
.setColor("BLACK")
.addField("banned User", `${bUser} with ID: ${bUser.id}`)
.addField("banned By", `<@${msg.author.id}> with ID: ${msg.author.id}`)
.addField("banned In", msg.channel)
.addField("Time", msg.createdAt)
.addField("Reason", breason)
//So-92.#0885
let banChannel = msg.guild.channels.find("name","log-bans");
if(!banChannel) return msg.channel.send(`اكتب ${p}banslog`).then(pb => {
pb.delete(1600);
})
//So-92.#0885
msg.guild.member(bUser).ban();
msg.reply("تم بنجاح").then(ps => {
ps.edit("✅").then(ss => {
ss.delete(1500)
})
})
banChannel.send(banembed)
    return;
}
client.on("message", msg => {
let prefix = '8';//البرفكس
if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("ليس لديك الصلاحية الكافية :x:");
 if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("انا ليس لدي صلاحية كافية :x:");
if(msg.content.startsWith(prefix + "banslog")){
msg.guild.createChannel("log-bans");
msg.reply(" تم بنجاح :white_check_mark: ").then(p => {
p.delete(1600)
})
}
});
