const { Telegraf } = require('telegraf')

const bot = new Telegraf('')

console.log('Bot has been started')

bot.launch()

module.exports = bot
