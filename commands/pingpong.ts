import { BaseCommandInteraction } from 'discord.js';
import { Command } from '../Command';

export const PingPong: Command = {
    name: 'ping',
    description: 'A pong for your ping!',
    type: 'CHAT_INPUT',
    // Will ignore the below ESLint error for now,
    // hopefully it doesn't break things later
    run: (interaction: BaseCommandInteraction) => {
        const content = 'pong';

        void interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
