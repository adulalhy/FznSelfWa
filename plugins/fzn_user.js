(async () => {
switch (command) {
case 'menu':
case 'help':
const mode = selfna ? 'SELF': 'PUBLIC'
var menu = `◪ *INFO*
❏ Prefix: 「MULTI」
❏ Nama : ${pushname}
❏ Mode : ${mode}
❏ Runtime : ${cts}

*❏ Owner*
*| ◪ ${prefix}setfake [ query ]*
*| ◪ ${prefix}upswteks [ query ]*
*| ◪ ${prefix}upswimage [ query ]* 
*| ◪ ${prefix}upswvideo [ query ]* 
*| ◪ ${prefix}runtime* 
*| ◪ ${prefix}ping* 
*| ◪ ${prefix}afk* 
*| ◪ ${prefix}self* 
*| ◪ ${prefix}public* 

*❏ Sticker*
*| ◪ ${prefix}sticker [ reply ]*
*| ◪ ${prefix}snobg [ reply ]*
*| ◪ ${prefix}scircle [ reply ]* 

*❏ Downloader*
*| ◪ ${prefix}play [ query ]*
*| ◪ ${prefix}ig [ link ]*
*| ◪ ${prefix}fb [ link ]*

*❏ Group*
*| ◪ ${prefix}hidetag [ query ]*

*❏ Photo Effect*
*| ◪ ${prefix}circle [ reply foto ]*
*| ◪ ${prefix}amazingtypo [ reply foto ]*
*| ◪ ${prefix}3dblock [ reply foto ]*
*| ◪ ${prefix}flameup [ reply foto ]*
*| ◪ ${prefix}rosepetals [ reply foto ]*
*| ◪ ${prefix}lovelyframe [ reply foto ]*
*| ◪ ${prefix}valentine [ reply foto ]*
*| ◪ ${prefix}pipframe [ reply foto ]*
*| ◪ ${prefix}violetframe [ reply foto ]*
*| ◪ ${prefix}brilliant [ reply foto ]*
*| ◪ ${prefix}beautiful [ reply foto ]*
*| ◪ ${prefix}mintframe [ reply foto ]*

*❏ Other*
*| ◪ ${prefix}sfile [ query ]*
*| ◪ ${prefix}sfiledl [ link ]*
*| ◪ ${prefix}ssweb [ link ]*
`
Kirim.FakeStatus(from, menu, fakenya)
 break
			case 'setfake':
				if(!q) return reply('Masukan Teksnya kak :v')
				fakenya = q
				Kirim.FakeStatus(from, 'Sukses Mengganti Fake: '+ fakenya, fakenya) 
			break	
			case 'runtime':
			case 'test':
				Kirim.FakeGroup(from, cts, fakenya)
            break
			case 'ping':
				const timestamp = speed();
                const latensi = speed() - timestamp 
                child =` \`\`\`Loaded Message\`\`\`             
\`\`\` - [ ${fzn.user.phone.device_manufacturer} ] HANDPHONE\`\`\`
\`\`\` - [ ${fzn.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ] RAM\`\`\`
\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
				//console.log(child)
				Kirim.FakeGroup(from, child, fakenya)
            break  
			case 'afk':
				if (!AFK.isAfk) {
				AFK.lastseen = Math.round((new Date()).getTime() / 1000);
					if (args[0] !== '') { AFK.reason = args.join(' '); }
					Kirim.FakeStatus(from,'*Saya Sekarang Offline!*' + (AFK.reason !== false ? ('\n*' + 'Alasan*' +': ' + AFK.reason) : ''),fakenya);
					AFK.isAfk = true;
				}
            break
			case 'self':
			if (!msg.key.fromMe) return
			if(selfna) return Kirim.FakeStatus(from, 'This Is Self!!!', fakenya) 
				selfna = true
				Kirim.FakeStatus(from, 'Mode Self Aktif!!!', fakenya) 
			break
			case 'public':
			if (!msg.key.fromMe) return
			if(!selfna) return Kirim.FakeStatus(from, 'This Is Public!!!', fakenya) 
				selfna = false
				Kirim.FakeStatus(from, 'Mode Public Aktif!!!', fakenya) 
			break
			case 'hidetag':
					if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
					if (!isGroup) return reply(warn.errorne.onGroup)
					var value = q
					var group = await fzn.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: msg
					}
					fzn.sendMessage(from, options, text)
			break		
			case 'upswteks':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (!q) return Kirim.FakeStatus(from, 'Isi teksnya!', fakenya)
				fzn.sendMessage('status@broadcast', `${q}`, extendedText)
				Kirim.FakeStatus(from, `Sukses Up Story Teks : ${q}`, fakenya)
			break
			case 'upswimage':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (isQuotedImage) {
				const swne = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
				gas = await fzn.downloadMediaMessage(swne)
				fzn.sendMessage('status@broadcast', gas, image, { caption: `${q}` })
				bur = `Sukses Upload Story Image dengan Caption : ${q}`
				fzn.sendMessage(from, bur, text, { quoted: msg })
				} else {
				reply('Format Salah!!!')
				}
            break
			case 'upswvideo':
				if (!msg.key.fromMe) return reply(warn.errorne.onSelf)
				if (isQuotedVideo) {
				const swne = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
				gas = await fzn.downloadMediaMessage(swne)
				fzn.sendMessage('status@broadcast', gas, video, { caption: `${q}` }) 
				bur = `Sukses Upload Story Video dengan Caption : ${q}`
				fzn.sendMessage(from, bur, text, { quoted: msg })
				} else {
				reply('Format Salah!!!')
				}
            break	
		case 'clone':
				try{
				if(!isGroup) return reply(warn.errorne.onGroup)
				if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Clone!!!')
				mentag = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				namanya = fzn.contacts[mentag] != undefined ? fzn.contacts[mentag].vname || fzn.contacts[mentag].notify : undefined			
				resultpp = await fzn.getProfilePicture(mentag)
				bufferna = await getBuffer(resultpp)
				fzn.updateProfilePicture(fzn.user.jid, bufferna)	
				fzn.updateProfileName(namanya)	
				} catch {
				 reply('ppnya gak ada kak!!!')
				}	
			break
			case 'kick':	
				if(!isGroup) return reply(warn.errorne.onGroup)
				if (fazone.reply_message !== false) {
				reply('Tunggu Sebentar!')
				setTimeout( () => {
			        fzn.sendMessage(from, `Berhasil Telah Mengeluarkan @${fazone.reply_message.data.participant.split('@')[0]}`, text, {quoted: msg, contextInfo: {mentionedJid: [fazone.reply_message.data.participant]}})
		        }, 4000)
				setTimeout( () => {
			        fzn.groupRemove(from, [fazone.reply_message.data.participant]).catch((e)=>{reply(`*BOT INI HARUS JADI ADMIN*`)})
		        }, 3000)
				}else if(fazone.reply_message === false && fazone.mention !== false){
				if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag Target Yang Ingin Di Kick')
				mentag = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
				reply('Tunggu Sebentar!')
				setTimeout( () => {
			        fzn.sendMessage(from, `Berhasil Telah Mengeluarkan @${mentag.split('@')[0]}`, text, {quoted: msg, contextInfo: {mentionedJid: [mentag]}})
		        }, 4000)
				setTimeout( () => {
			        fzn.groupRemove(from, [mentag]).catch((e)=>{reply(`*BOT INI HARUS JADI ADMIN*`)})
		        }, 3000)
				}else{
					reply('Format Salah!!!, Pastikan tag/reply untuk mengkick!!!')
				}
			break
			case 'exec':
					if (!q) return reply('Kata perintahnya apa?')
					var user = os.userInfo().username;
					exec(q, async (err, stdout, stderr) => {
					if (err) {
						return reply('```' + user + ':~# ' + q + '\n' + err + '```');
					}      
					return reply('```' + user + ':~# ' + q + '\n' + stdout + '```');
					});
				break
			default:
				if (budy.startsWith('>')){
				try {
				return fzn.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: msg})
			} catch(err) {
				e = String(err)
				reply(e)
				}
			}
		}
})();

//move to plugins folder :)
