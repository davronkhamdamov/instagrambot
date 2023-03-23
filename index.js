const TelegramBot = require('node-telegram-bot-api');
const token = '5151565957:AAG_XQ8OvAEsmhJbDUqTFCOxDIAWBX4hmPQ';
const video = require('./reques');
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  try {
    if (msg.text === '/start') {
      const ism = msg.from.first_name;
      bot.sendMessage(
        msg.chat.id,
        `Assalomu aleykum<b>${ism}</b> Botimizga xush kelibsiz!
           menga birorta bir instagram link yuboring men sizga video tarzda yuboraman`,
        {
          parse_mode: 'HTML',
        }
      );
    }
    if (msg.text.includes('https://www.instagram.com')) {
      const geturl = await video(msg.text);
      bot.sendMessage(msg.chat.id, 'Biroz kutib turing');
      await bot.sendVideo(msg.chat.id, geturl.data.media, {
        caption: geturl.data.title,
      });
    } else {
      bot.sendMessage(msg.chat.id, 'Bu instagram link emas');
    }
  } catch (error) {
    console.log(error);
  }
});
