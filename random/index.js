const bot = require('./utils/bootstrap')
const { startKB } = require('./utils/keyboard')
const random = require('./utils/operations')

bot.start(ctx => ctx.reply('Hello', startKB()))

bot.hears('Случайное число от 1 до 100', ctx => ctx.reply(random.random(100)))

bot.hears('Случайная цитата', ctx => ctx.reply(random.randomQuote()))

bot.hears('Бросить монетку', ctx => ctx.reply(random.tossCoin()))

bot.hears('Бросить кость', ctx => ctx.reply(random.tossDice()))
