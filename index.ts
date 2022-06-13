import { Client, Intents } from 'discord.js';
import 'dotenv/config';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    console.log('Hi bob! The bot is ready!');
});

client.on('messageCreate', async (message) => {
    if (message.content === 'ping') {
        await message.reply({
            content: 'pong',
        });
    }
});

client.login(process.env.TOKEN).catch((err) => {
    console.log(err);
});
