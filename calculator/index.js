const bot = require('./utils/bootstrap')
const operations = require('./utils/operations')

bot.on('message', ctx => {
    const message = ctx.message.text.split(' ')
    message.splice(2, 1)
    switch (message[0]) {
        case 'Сложить':
            return ctx.reply(`Результат: ${operations.sum(message[1], message[2])}`)
        case 'Убавить':
            return ctx.reply(`Результат: ${operations.sub(message[1], message[2])}`)
        case 'Умножить':
            return ctx.reply(`Результат: ${operations.multiple(message[1], message[2])}`)
        case 'Разделить':
            return ctx.reply(`Результат: ${operations.divide(message[1], message[2])}`)
        default:
            ctx.reply('Такой операции не найдено')
    }
})
