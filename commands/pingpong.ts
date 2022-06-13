import { BaseCommandInteraction } from 'discord.js';
import { Command } from '../Command';

export const PingPong: Command = {
    name: 'ping',
    description: 'A pong for your ping!',
    type: 'CHAT_INPUT',
    run: (interaction: BaseCommandInteraction) => {
        const content = 'pong';

        void interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
