const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()

const text = require('./const')

function startMessage(first_name) {
    return `
Приветствуем Вас ${first_name}!
Вы находитесь в информационном канале Детского образовательного центра Радуга
`;
}

const bot = new Telegraf(process.env.TOKEN)

function btnAction(action, img, text) {
    bot.action(action, async (ctx) => {
        try {
            await ctx.answerCbQuery()
            if (img !== false) {
                await ctx.replyWithPhoto({source: img})
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })
        } catch (e) {
            console.error(e)
        }
    })
}

bot.start((ctx) => ctx.reply(startMessage(ctx.message.from.first_name)))
bot.help((ctx) => ctx.reply(text.commands))


//---------------------------------------------------------Общая информация
bot.command('start_info', async (ctx) => {
    try {
       await ctx.replyWithHTML('<b>Общая информация</b>', Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Преподаватели', 'teachers'),
                    Markup.button.callback('Курсы', 'courses')
                ],
                [Markup.button.callback('Наше местоположение', 'mapinfo')]
            ]
        ))
    } catch (e) {
        console.error(e)
    }
})
//---------------------------------------------------------------------------


//----------------------------------------------------------Курсы
bot.action('courses', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML('<b>Курсы</b>', Markup.inlineKeyboard(
            [
                [
                    Markup.button.callback('Логопедические занятия', 'course1'),
                    Markup.button.callback('Скорочтение', 'course2')
                ],
                [Markup.button.callback('Индивидуальные занятия', 'course3')],
                [Markup.button.callback('Подготовка к школе(6-7 лет)', 'course4')],
                [Markup.button.callback('Подготовка к школе(5-6 лет)', 'course5')],
            ]
        ))
    } catch (e) {
        console.error(e)
    }
})
//-------------------------------------------------------------------


//-------------------------------------Подготовка к школе(6-7 лет)
bot.action('course4', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML('<b>Подготовка к школе(6-7 лет)</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('На государственном языке', 'course4_kaz')],
                [Markup.button.callback('На русском языке', 'course4_rus')]
            ]
        ))
    } catch (e) {
        console.error(e)
    }
})
//-----------------------------------------------------------------


//-------------------------------------Подготовка к школе(5-6 лет)
/*bot.action('course5', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithHTML('<b>Подготовка к школе(5-6 лет)</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('На государственном языке', 'course5_kaz')],
                [Markup.button.callback('На русском языке', 'course5_rus')]
            ]
        ))
    } catch (e) {
        console.error(e)
    }
})*/
//-----------------------------------------------------------------

btnAction('course1', false, text.course1) //Логопедические занятия

btnAction('course2', false, text.course2) //Скорочтение

btnAction('course3', false, text.course3) //Индивидуальные занятия

btnAction('course4_rus', false, text.course4_rus) //Подготовка к школе(6-7 лет) на русском языке

btnAction('mapinfo', './img/adress_center.png', text.mapinfo) //Наше местоположение

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))