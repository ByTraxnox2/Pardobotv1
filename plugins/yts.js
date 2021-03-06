let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) return m.reply('*Y el texto?*')
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
β¨ *${v.title}* 
π (${v.url})
β³ *DuraciΓ³n:* ${v.timestamp}
π *Fecha:* de subida: ${v.ago}
π *Vistas:* ${v.views} 
      `.trim()
      case 'channel': return `
β¨ *${v.name}*
π (${v.url})
π₯ *Subscriptores:* ${v.subCountLabel}  (${v.subCount}) 
π₯ *Videos:* ${v.videoCount}  
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
handler.command = /^yts(earch)?$/i
module.exports = handler
