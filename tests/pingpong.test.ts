import { PingPong } from '../src/commands/pingpong';
import { mockInteraction } from './mockInteraction';

test('PingPong command returns pong', () => {
    const mockFollowUp = jest.spyOn(
        mockInteraction, 'followUp'
    ).mockImplementation(jest.fn());


    PingPong.run(mockInteraction);
    expect(mockFollowUp).toBeCalledWith({
        ephemeral: true,
        content: 'pong'
    });
});
