import { BaseCommandInteraction } from 'discord.js';

export const mockInteraction: BaseCommandInteraction = {
    followUp: (ephemeral: boolean, content: string) => {
        console.log(ephemeral, content);
    }
};
