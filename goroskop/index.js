const bot = require('./utils/bootstrap')
const { startKB } = require('./utils/keyboard')
const { signs, prediction } = require('./utils/signs')

bot.start(ctx => ctx.reply('hi', startKB()))

bot.hears(signs, ctx => ctx.reply(prediction(ctx.message.text)))
