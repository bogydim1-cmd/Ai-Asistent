import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    '👋 Добро пожаловать в AI Assistant Studio\n\nСоздайте ИИ-ассистента для вашего бизнеса прямо сейчас.',
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '🚀 Создать ИИ-ассистента',
              web_app: { url: 'https://yourdomain.com' }
            }
          ]
        ]
      }
    }
  );
});

bot.launch();
