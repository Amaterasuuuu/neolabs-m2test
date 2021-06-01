const { Markup } = require('telegraf')
const { signs } = require('./signs')

module.exports.startKB = () => Markup.keyboard([
    signs.slice(0, 4),
    signs.slice(4, 8),
    signs.slice(8, 12)
]).resize()
