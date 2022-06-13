import { BaseCommandInteraction, Client } from 'discord.js';
import { Command } from '../Command';

export const PingPong: Command = {
    name: 'ping',
    description: 'A pong for your ping!',
    type: 'CHAT_INPUT',
    // Will ignore the below ESLint error for now,
    // hopefully it doesn't break things later
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = 'pong';

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
