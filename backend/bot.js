const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');

dotenv.config();

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Define the base URL for the backend API

// Handle the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const telegram_id = msg.from.id;

    // Send a message back to the user
    bot.sendMessage(chatId, 'Welcome to TapMe! Click the button to earn coins.');

    // Redirect to the frontend interface (provide your frontend URL here)
    const frontendURL = `https://tapboty.netlify.app?telegram_id=${telegram_id}`;
    bot.sendMessage(chatId, `Click here to start: ${frontendURL}`);
});
