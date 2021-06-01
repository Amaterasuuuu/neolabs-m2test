const { Markup } = require('telegraf')

module.exports.startKB = () => Markup.keyboard([
    ['Случайное число от 1 до 100', 'Случайная цитата'],
    ['Бросить монетку', 'Бросить кость']
]).resize()
