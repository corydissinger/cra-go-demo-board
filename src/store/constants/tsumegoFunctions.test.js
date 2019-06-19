import * as GAME_MATHS from './gameMaths';
import * as FLAGS from './flags';

it('black placing a stone to kill a white stone in NW corner', () => {
    const existingStones = {
        a1: FLAGS.STONE_WHITE,
        a2: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'b',
        newStoneRowCoordinate: 1,
    });

    expect(newStonesState).toEqual({
        a2: FLAGS.STONE_BLACK,
        b1: FLAGS.STONE_BLACK,
    });
});