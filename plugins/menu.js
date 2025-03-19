/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XD
Support      : wa.me/263714757857
*/



const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `
╭──❍「 *${config.BOT_NAME}* 」
*┊ 🤴* *xᴅ ᴜsᴇʀ* : *${pushname}* 
*┊ 🌐* *ᴍᴏᴅᴇ:* *[${config.MODE}]*
*┊ ✨* *ᴘʀᴇғɪx:* *[ ${config.PREFIX} ]*
*┊ 🕒* *ᴜᴘᴛɪᴍᴇ* :_${runtime(process.uptime())}_
*┊ 👤* *ᴏᴡɴᴇʀ:* *ᴍᴀʟᴠɪɴ ᴋɪɴɢ (🇿🇼)*
*┊ 🎐* *ᴠᴇʀsɪᴏɴ:* *3.0.0 ʙᴇᴛᴀ☯︎*
╰─────────────❍

 ⚡️〔ᴊᴏɪɴ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴄʜᴀɴɴᴇʟ〕⚡️
*╭──┄┄┄┄┄┄┄┄┄┄────❍*
*┋☞ ➊ • ᴘʀɪᴠᴀᴛᴇ*
*┋☞ ➋ • ᴏᴡɴᴇʀ*
*┋☞ ➌ • ᴄᴏɴᴠᴇʀᴛ*
*┋☞ ➍ • ᴀɪ*
*┋☞ ➎ • sᴇᴀʀᴄʜ*
*┋☞ ➏ • ᴅᴏᴡɴʟᴏᴀᴅ*
*┋☞ ➐ • ᴍᴀɪɴ*
*┋☞ ➑ • ɢʀᴏᴜᴘ*
*┋☞ ➒ • ғᴜɴ*
*╿☞ ➓ • ᴏᴛʜᴇʀ*
*╿☞ 11 • ᴛᴏᴏʟs*
*╿☞ 12 • sᴇᴛᴛɪɴɢs*
*╰━━┉┉┉━━┉┉━┉┅┅┅┅┅⪼*⁠⁠

*╰┈➤ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ sᴇʟᴇᴄᴛ*
╭───────────❍
 ${config.DESCRIPTION}
╰───────────❍`;
        const vv = await conn.sendMessage(from, { 
  image: { url: config.MENU_IMG }, 
  caption: desc, 
  contextInfo: {
    mentionedJid: [''], 
    groupMentions: [],
    forwardingScore: 999, // برای فوروارد شدن
    isForwarded: true, // پیام به صورت فوروارد شده نشان داده می‌شود
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363306168354073@newsletter', 
      newsletterName: "ᴍᴀʟᴠɪɴ ᴋɪɴɢ", 
      serverMessageId: 999
    },
    externalAdReply: { 
      title: 'Subscribe YouTube', 
      body: `${pushname}`, 
      mediaType: 1, 
      sourceUrl: "https://www.youtube.com/@malvintech2", 
      thumbnailUrl: "https://www.youtube.com/@malvintech2" ,
      previewType: 'PHOTO',
      renderSmallerThumbnail: true,
      showAdAttribution: true
    }
  }
}, { quoted: mek });
        
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`〘 𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ☻ *.ᴅɪᴀʀʏ*
┋ ☻ *.sᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴅɪᴀʀʏ*
┋ ☻ *.ʀᴇsᴇᴛᴘᴀssᴡᴏʀᴅ*
┋ ☻ *.ᴅᴀɪʟʏғᴀᴄᴛs*
┋ ☻ *.ᴀɢᴇ*
┋ ☻ *.ᴛɪᴍᴇᴢᴏɴᴇ*
┋ ⚉ *.ʏᴛsᴛᴀʟᴋ*
┋ ☻ *.sᴇɴᴅɪᴍᴀɢᴇ*
┋ ☻ *.ᴄᴏᴜɴᴛʀʏ*
┋ ☻ *.ᴠᴄᴀʀᴅ*
┋ ☻ *.ᴡᴀ*
┋ ☻ *.ᴀᴜᴛᴏʙɪᴏ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

⭓ *ᴍᴀʟᴠɪɴ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴘʀɪᴠᴀᴛᴇ: 13*

> *🚀ᴊᴏɪɴ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  
                        break;
                    case '2':               
                        reply(`〘 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭───────────────⪼
┋☻ *.sᴇᴛᴛɪɴɢs*
┋☻ *.ʀᴇᴘᴏʀᴛ* 
┋⚉ *.ᴏᴡɴᴇʀ*
┋⚉ *.ʀᴇϙᴜᴇsᴛ*
┋☻ *.ʀᴀɴᴋ*
┋⚉ *.ʀᴇᴘᴏ*
┋⚉ *.ʙᴏᴛ*
┋⚉ *.ᴄʜᴇᴄᴋ*
┋⚉ *.sᴜᴘᴘᴏʀᴛ*
┋☻ *.sᴜᴘᴘᴏʀᴛ2*
┋⚉ *.ᴄʜᴀɴɴᴇʟ*
┋⚉ *.ꜱʏꜱᴛᴇᴍ*
┋⚉ *.ᴠᴇrsɪᴏɴ*
┋⚉ *.ʙʟᴏᴄᴋ*
┋⚉ *.ᴜɴʙʟᴏᴄᴋ*
┋⚉ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ *.sᴇᴛᴘᴘ*
┋⚉ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ *.ᴘɪɴɢ*
┋⚉ *.ᴘɪɴɢ2*
┋⚉ *.ᴊɪᴅ*
┋⚉ *.ɢᴊɪᴅ*
┋⚉ *.ᴊɪᴅ1*
┋⚉ *.ᴊɪᴅ2*
┋⚉ *.ʀᴇꜱᴛᴀʀᴛ*
┋⚉ *.ᴡʜᴀᴛsɴᴇᴡ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴘᴀɪʀ 263xxx*
┋☻ *.sᴘᴀᴍ*
┋⚉ *.ɴᴇᴡᴘʟᴜɢɪɴs*
┋⚉ *.ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴡɴᴇʀ: 28

> *🚀ᴊᴏɪɴ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                        break;
                    case '3':               
                        reply(`𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨

╭─────────────⪼
┋ ☻ *ᴄᴏɴᴠᴇʀᴛ* 
┋ ☻ *ᴘᴅғ*
┋ ☻ *ᴠsᴛɪᴄᴋᴇʀ* 
┋ ☻ *ᴛɢs*
┋ ☻ *ss* 
┋ ☻ *ᴛʀᴛ*
┋ ☻ *ᴛᴛs*
┋ ☻ *ᴠᴠ*
┋ ☻ *ғᴀɴᴄʏ*
┋ ☻ *sᴛᴇᴀʟ*
┋ ☻ *ᴛᴀᴋᴇ*
┋ ☻ *sᴛɪᴄᴋᴇʀ*
┋ ☻ *ʟᴏɢᴏ*
┋ ☻ *ʙɪɴᴀʀʏ*
┋ ☻ *ᴅᴇʙɪɴᴀʀʏ*
┋ ☻ *ᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴇɴᴄᴏᴅᴇ*
┋ ☻ *ᴜʀʟᴅᴇᴄᴏᴅᴇ*
┋ ☻ *ᴛɪɴʏᴜʀʟ*
┋ ☻ *ᴜʀʟ / ᴛᴏᴜʀʟ*
┋ ☻ 
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 22

> *🚀ᴊᴏɪɴ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                        break;
                    case '4':               
                        reply(`〘 𝗔𝗜 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ᴀɪ* 
┋ ☻ *ɢᴘᴛ*
┋ ☻ *ᴍᴀʟᴠɪɴ*
┋ ☻ *ɢᴇᴍɪɴɪ*
┋ ☻ *ɢᴘᴛ3*
┋ ☻ *ᴍɪsᴛʀᴀᴀɪ*
┋ ☻ *ʟʟᴀᴍᴀ3*
┋ ☻ *ɢᴘᴛ4o*
┋ ☻ *ᴍᴀʟᴠɪɴᴀɪ*
┋ ☻ *ᴀɪɪᴍɢ*
┋ ☻ *ɢᴇɴᴇʀᴀᴛᴇɪᴍɢ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 11

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url: config.MENU_IMG}, caption: desc }, { quoted: mek });
  
                        break;
                    case '5':               
                        reply(`〘 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 〙

╭──────── ────⪼
┋ ◉ *.ᴘʟᴀʏ* 
┋ ◉ *xsᴛᴀʟᴋ*
┋ ◉ *ʏᴛsᴛᴀʟᴋ*
┋ ◉ *ɪɢsᴛᴀʟᴋ*
┋ ◉ *ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ*
┋ ◉ *sᴏɴɢ*
┋ ◉ *.ᴠɪᴅᴇᴏ* 
┋ ◉ *.ʏᴛ  <ᴛᴇxᴛ>*
┋ ◉ *.ʟᴏʟɪ <ᴛᴇxᴛ>*
┋ ◉ *.ᴍᴏᴠɪᴇ <ᴛᴇxᴛ>*
┋ ◉ *.ɪᴍɢ <ᴛᴇxᴛ>*
┋ ◉ *.ᴡᴇᴀᴛʜᴇʀ <ᴄɪᴛʏ>*
┋ ◉ *ʟʏʀɪᴄs*
┋ ◉ *ɢᴏᴏɢʟᴇ*
┋ ◉ *ɴᴇᴡs*
┋ ◉ *ᴡɪᴋɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴀʀᴄʜ: 14

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                        break;
                    case '6':               
                        reply(`〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *ʏᴛᴘᴏsᴛ* 
┋ ☻ *ᴀᴘᴋ* 
┋ ☻ *ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ *ɢᴅʀɪᴠᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ *ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
┋ ☻ *sᴘᴏᴛɪғʏ*
┋ ☻ *ғʙ*
┋ ☻ *ɪɢ* 
┋ ☻ *ᴍᴏᴠɪᴇ*
┋ ☻ *sᴏɴɢ* 
┋ ☻ *sᴏɴɢ1*
┋ ☻ *ᴠɪᴅᴇᴏ* 
┋ ☻ *ᴠɪᴅᴇᴏ3*
┋ ☻ *ᴠɪᴅᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏ*
┋ ☻ *ᴘʟᴀʏ2*
┋ ☻ *ᴘʟᴀʏ3*
┋ ☻ *ᴘʟᴀʏᴛ*
┋ ☻ *ᴘʟᴀʏᴘʀᴏ*
┋ ☻ *ᴘʟᴀʏᴜʟᴛʀᴀ*
┋ ☻ *ʏᴛ*
┋ ☻ *ʏᴛᴍᴘ3*
┋ ☻ *ʏᴛᴍᴘ4*
┋ ☻ *ᴛɪᴋᴛᴏᴋ* 
┋ ☻ *ᴛɪᴋᴛᴏᴋ2*
┋ ☻ *ɪᴍɢ* 
┋ ☻ *ʙᴀɪsᴄᴏᴘᴇ*
┋ ☻ *sɪɴʜᴀʟᴀsᴜʙ*
┋ ☻ *ɢᴇɴɪsɪsɪʟᴀ*
┋ ☻ *xɴxxᴅᴏᴡɴ*
┋ ☻ *xᴠᴅʟ*
┋ ☻ *ᴘɪɴᴛᴇʀᴇsᴛ*
┋ ☻ *ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴅᴏᴡɴʟᴏᴀᴅ: 21

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek }); 
 
                        break;
                    case '7':               
                        reply(`〘 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 〙

╭─────────────
┋ ◕ *ᴀʟɪᴠᴇ* 
┋ ◕ *ᴀʟɪᴠᴇ2* 
┋ ◕ *ʟɪᴠᴇ*
┋ ◕ *ʙᴏᴛ*
┋ ◕ *ᴍᴇɴᴜ* 
┋ ◕ *ᴀʟʟᴍᴇɴᴜ* 
┋ ◉ *ʟɪsᴛ*
┋ ◕ *sᴜᴘᴘᴏʀᴛ* 
┋ ◕ *sʏsᴛᴇᴍ* 
┋ ◕ *ᴘɪɴɢ* 
┋ ◕ *ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ *ᴜᴘᴅᴀᴛᴇ*
┋ ◕ *ɪɴғᴏ*
┋ ◕ *ᴀʙᴏᴜᴛ*
┋ ◕ *ᴛɪɴʏᴜʀʟ*
┋ ◕ *ᴏʙғ/ᴏʙғᴜsᴄᴀᴛᴇ*
┋ ◉ *ϙʀᴄᴏᴅᴇ*
┋ ◕ *ʙᴀsᴇ64*
┋ ◕ *ᴅᴇʙᴀsᴇ64*
┋ ◕ *ғᴇᴛᴄʜ / ᴀᴘɪ*
┋ ◕ *ɴᴘᴍɢᴜɪᴅᴇ*
┋ ◕ *ɴᴇᴡs* 
┋ ◕ *ᴡɪᴋɪ* 
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷-
📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴍᴀɪɴ: 23

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                        break;
                    case '8':               
                        reply(`〘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨〙

╭────────────⪼
┋ ☛ *ᴘʀᴏᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇᴍᴏᴛᴇ* 
┋ ☛ *ᴅᴇʟᴇᴛᴇ*
┋ ☛ *ᴋɪᴄᴋ* 
┋ ☛ *ᴋɪᴄᴋᴀʟʟ*
┋ ☛ *ᴋɪᴄᴋᴀʟʟ2*
┋ ☛ *ᴋɪᴄᴋᴀʟʟ3*
┋ ☛ *ᴋɪᴄᴋ+*
┋ ☛ *ғᴀᴍɪʟʏ* 
┋ ☛ *ᴇxᴏʀ* 
┋ ☛ *ᴘʀᴏᴍᴏᴛᴇsᴛᴀғғ* 
┋ ☛ *ᴀᴅᴅ* 
┋ ☛ *ᴀᴅᴍɪɴs* 
┋ ☛ *ɢᴇᴛᴘɪᴄ* 
┋ ☛ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ☛ *sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ☛ *ᴘᴏʟʟ*
┋ ☛ *ɢɴᴀᴍᴇ* 
┋ ☛ *ᴛᴀɢᴀʟʟ* 
┋ ☛ *ᴛᴀɢᴀᴘᴘ* 
┋ ☛ *ᴄʜᴀɴɴᴇʟ* 
┋ ☛ *ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ☛ *ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ☛ *ɢɪɴғᴏ* 
┋ ☛ *ɢʟɪɴᴋ*
┋ ☛ *ᴜɴʟᴏᴄᴋ*
┋ ☛ *ʟᴏᴄᴋ*
┋ ☛ *ᴍᴜᴛᴇ*
┋ ☛ *ᴜɴᴍᴜᴛᴇ*
┋ ☛ *ɢᴅᴇsᴄ*
┋ ☛ *sᴇᴛsᴜʙᴊᴇᴄᴛ*
┋ ☛ *ɪɴᴠɪᴛᴇ*
┋ ☛ *ᴊᴏɪɴ*join
┋ ☛ *ʀᴇᴠᴏᴋᴇ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢᴅsᴇᴄ*
┋ ☛ *ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴍᴇᴍʙᴇʀs*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴀʟʟ2*
┋ ☛ *ʀᴇᴍᴏᴠᴇᴀᴅᴍɪɴs*
┋ ☛ *ᴜɴʟᴏᴄᴋɢs*
┋ ☛ *ʟᴏᴄᴋɢs*
┋ ☛ *sᴇɴᴅᴅᴍ*
┋ ☛ *ᴅɪsᴀᴘᴘᴇᴀʀ*
┋ ☛ *ᴀʟʟʀᴇϙ*
┋ ☛ *ᴊᴏɪɴʀᴇϙᴜᴇsᴛs*
┋ ☛ *ʜɪᴅᴇᴛᴀɢ*setgpp*broadcast*invite*exit*newgc*randomship*poll*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ɢʀᴏᴜᴘ: 46

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                       break;
                    case '9':               
                        reply(`〘 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ◉ *sϙᴜɪᴅɢᴀᴍᴇ* 
┋ ◉ *ᴋᴏɴᴀᴍɪ* 
┋ ◉ *ғᴀᴄᴛ* 
┋ ◉ *ϙᴜɪᴢ* 
┋ ◉ *ᴇᴍɪx* 
┋ ◉ *ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ* 
┋ ◉ *ᴅɪᴅʏᴏᴜᴋɴᴏᴡ*
┋ ◉ *ᴀᴜʀᴀ* 
┋ ◉ *8ʙᴀʟʟ* 
┋ ◉ *ᴄᴏᴍᴘʟɪᴍᴇɴᴛ* 
┋ ◉ *ʟᴏᴠᴇᴛᴇsᴛ* 
┋ ◉ *ᴇᴍᴏᴊɪ*
┋ ◉ *ᴄʀʏ* 
┋ ◉ *ᴄᴜᴅᴅʟᴇ*
┋ ◉ *ʙᴜʟʟʏ*
┋ ◉ *ʜᴜɢ* 
┋ ◉ *ᴀᴡᴏᴏ* 
┋ ◉ *ʟɪᴄᴋ* 
┋ ◉ *ᴘᴀᴛ* 
┋ ◉ *sᴍᴜɢ* 
┋ ◉ *ʙᴏɴᴋ* 
┋ ◉ *ʏᴇᴇᴛ* 
┋ ◉ *ʙʟᴜsʜ* 
┋ ◉ *ʜᴀɴᴅʜᴏʟᴅ* 
┋ ◉ *ʜɪɢʜғɪᴠᴇ* 
┋ ◉ *ᴡᴀᴠᴇ* 
┋ ◉ *ɴᴏᴍ* 
┋ ◉ *sᴍɪʟᴇ* 
┋ ◉ *ᴡɪɴᴋ* 
┋ ◉ *ʜᴀᴘᴘʏ* 
┋ ◉ *ɢʟᴏᴍᴘ* 
┋ ◉ *ʙɪᴛᴇ* 
┋ ◉ *ᴘᴏᴋᴇ* 
┋ ◉ *ᴄʀɪɴɢᴇ* 
┋ ◉ *ᴅᴀɴᴄᴇ* 
┋ ◉ *ᴋɪʟʟ* 
┋ ◉ *sʟᴀᴘ* 
┋ ◉ *ᴋɪss* 
┋ ◉ *ʜᴀᴄᴋ*  
┋ ◉ *ʟᴏʟɪ* 
┋ ◉ *ᴡᴀɪғᴜ*
┋ ◉ *ɴᴇᴋᴏ*
┋ ◉ *ᴍᴇɢᴜᴍɪɴ*
┋ ◉ *ᴅᴏɢ*
┋ ◉ *ᴄᴀᴛ*
┋ ◉ *ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
┋ ◉ *ʙɪʙʟᴇ*
┋ ◉ *sʜɪᴘ*
┋ ◉ *ɪɴsᴜʟᴛ*
┋ ◉ *ғᴀɴᴄʏ*
┋ ◉ *ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┋ ◉ *ᴄʜᴀʀᴀᴄᴛᴇʀ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇ*
┋ ◉ *ʀɪɴɢᴛᴏɴᴇs*
┋ ◉ *ʀᴄᴏʟᴏʀ*
┋ ◉ *ʀᴏʟʟ*
┋ ◉ *ᴘɪᴄᴋ*
┋ ◉ *ᴄᴏɪɴғʟɪᴘ*
┋ ◉ *ғʟɪᴘ*
┋ ◉ *ᴅᴀᴛᴇ*
┋ ◉ *ᴛɪᴍᴇɴᴏᴡ*
┋ ◉ *ᴄᴏᴜɴᴛ*
┋ ◉ *ᴄᴏᴜɴᴛx*
┋ ◉ *sʜᴀᴘᴀʀ*
┋ ◉ *ᴄᴀʟᴄᴜʟᴀᴛᴇ*
┋ ◉ *ʀᴀᴛᴇ*
┋ ◉ *ᴄᴏᴜᴘʟᴇ*
┋ ◉ *ғᴀᴍɪʟʏ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ғᴜɴ: 67

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                       break;
                    case '10':               
                        reply(`〘 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 〙

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈⪼
┋ ☻ *.ᴍᴏᴠɪᴇ*
┋ ☻ *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*
┋ ☻ *.ɢɪᴛʜᴜʙ*
┋ ☻ *.ɢᴘᴀꜱꜱ*
┋ ☻ *.ɢɪᴛᴄʟᴏɴᴇ*
┋ ☻ *.ʀᴇᴘᴏ*
┋ ☻ *.ᴅᴇғɪɴᴇ*
┋ ☻ *.ᴜʀʟ*
┋ ☻ *.sᴀᴠᴇ*
┋ ☻ *.ϙᴜᴏᴛᴇ*
┋ ☻ *.sᴛᴀᴛᴜs*
┋ ☻ *.sʀᴇᴘᴏ*
┋ ☻ *.ɴᴘᴍ*
┋ ☻ *ᴄʀᴇᴀᴛᴀᴘɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴄᴏɴᴠᴇʀᴛ: 13

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                        break;
                    case '11':               
                        reply(`〘 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ☻ *ᴘᴅғ* 
┋ ☻ *.ᴋɪss*
┋ ☻ *.ʜᴀɴᴅ*
┋ ☻ *.ʜᴀᴘᴘʏ*
┋ ☻ *.ʜᴇᴀʀᴛ*
┋ ☻ *.ᴀɴɢᴇʀ*
┋ ☻ *.sᴀᴅ*
┋ ☻ *.sʜʏ*
┋ ☻ *.ᴍᴏᴏɴ*
┋ ☻ *.ᴄᴏɴғᴜsᴇᴅ*
┋ ☻ *.ɴɪᴋᴀʟ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴏᴛʜᴇʀ 11

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url:config.MENU_IMG}, caption: desc }, { quoted: mek });  

                        break;
                    case '12':               
                        reply(`〘 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ *prefix* 
┋ ☻ *autoreadstatus*
┋ ☻ *mode*
┋ ☻ *setbotnumber*
┋ ☻ *anticall*
┋ ☻ *autosticker*
┋ ☻ *statusreply*
┋ ☻ *autoreact*
┋ ☻ *readmessage*
┋ ☻ *autorecording*
┋ ☻ *antibad*
┋ ☻ *antibot*
┋ ☻ *antilink1*
┋ ☻ *alwaysonline*
┋ ☻ *autotyping*
┋ ☻ *autoseen*
┋ ☻ *settings*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

  e.g autoseen on

📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ ᴀɪ: 17

> *🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ ᴋɪɴɢ ᴄʜᴀɴɴᴇʟ 🚀*`);
await conn.sendMessage(from, { image: { url: config.MENU_IMG}, caption: desc }, { quoted: mek });
                        break;
                    default:
                        reply("Invalid option. Please select a valid option❗");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
