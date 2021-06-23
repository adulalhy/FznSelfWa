(async () => {
			switch(command){
          case 'asupan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${LolApi}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await fzn.sendMessage(from, ini_buffer, video, { quoted: msg, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
      }
  })();		
//Fun BY Adul Alhy
