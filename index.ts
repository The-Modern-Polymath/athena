import {
    BaseCommandInteraction,
    Client,
    Intents,
    Interaction
} from 'discord.js';
import 'dotenv/config';
import { Commands } from './Commands.js';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', async () => {
    if (client.application !== null) {
        await client.application.commands.set(Commands);
    }
    else {
        console.log('There was an error in command initialization.');
    }
    console.log('Hi bob! The bot is ready!');
});

client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
        await handleSlashCommand(interaction);
    }
});

const handleSlashCommand = async(
    interaction: BaseCommandInteraction
) => {
    const slashCommand = Commands.find(
        (c) => c.name === interaction.commandName
    );
    if (!slashCommand) {
        await interaction.followUp({ content: '404 Command not found' });
        return;
    }
    await interaction.deferReply();
    slashCommand.run(interaction);
};

client.login(process.env.TOKEN).catch((err) => {
    console.log(err);
});
