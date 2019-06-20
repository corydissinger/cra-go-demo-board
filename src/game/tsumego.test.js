import * as GAME_MATHS from './maths';
import * as FLAGS from './flags';

// Two things:
//  I understand that it's faux pas to have two test files for a single source file
//      that being said, maths.test.js simply grew too large for my liking
//  For the Go aficianados, I understand there isn't much actual Tsumego going on
//      this is more or less the validation of stone removal. It's related to what's going on; though.

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

    const correctState = {
        a2: FLAGS.STONE_BLACK,
        b1: FLAGS.STONE_BLACK,
    };

    expect(newStonesState).toEqual(correctState);
});

it('black placing a stone to kill a white stone in SE corner', () => {
    const existingStones = {
        i9: FLAGS.STONE_WHITE,
        i8: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'h',
        newStoneRowCoordinate: 9,
    });

    const correctState = {
        i8: FLAGS.STONE_BLACK,
        h9: FLAGS.STONE_BLACK,
    };

    expect(newStonesState).toEqual(correctState);
});

it('black placing a stone to kill a white stone on a N side', () => {
    const existingStones = {
        e1: FLAGS.STONE_WHITE,
        f1: FLAGS.STONE_BLACK,
        f2: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'd',
        newStoneRowCoordinate: 1,
    });

    const correctState = {
        d1: FLAGS.STONE_BLACK,
        f1: FLAGS.STONE_BLACK,
        f2: FLAGS.STONE_BLACK,
    };

    expect(newStonesState).toEqual(correctState);
});