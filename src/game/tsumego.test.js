import * as GAME_MATHS from './maths';
import * as FLAGS from './flags';

// Two things:
//  I understand that it's faux pas to have two test files for a single source file
//      that being said, maths.test.js simply grew too large for my liking
//  For the Go aficianados, I understand there isn't much actual Tsumego going on
//      this is more or less the validation of stone removal. It's related to what's going on; though.

it('black placing a stone to kill a white stone in NW corner', () => {
    const existingStones = {
        A1: FLAGS.STONE_WHITE,
        A2: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'B',
        newStoneRowCoordinate: 1,
    });

    const correctState = {
        A1: FLAGS.STONE_NONE,
        A2: FLAGS.STONE_BLACK,
        B1: FLAGS.STONE_BLACK,
    };

    const expectedAlteredStones = new Set(['A1', 'B1']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('black placing a stone to kill a white stone in NW corner; random outlying stone', () => {
    const existingStones = {
        A1: FLAGS.STONE_WHITE,
        A2: FLAGS.STONE_BLACK,
        B7: FLAGS.STONE_WHITE,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'B',
        newStoneRowCoordinate: 1,
    });

    const correctState = {
        A1: FLAGS.STONE_NONE,
        A2: FLAGS.STONE_BLACK,
        B1: FLAGS.STONE_BLACK,
        B7: FLAGS.STONE_WHITE,
    };

    const expectedAlteredStones = new Set(['A1', 'B1']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('white placing a stone with no liberties commits suicide', () => {
    const existingStones = {
        E3: FLAGS.STONE_BLACK,
        F2: FLAGS.STONE_BLACK,
        F4: FLAGS.STONE_BLACK,
        G3: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_WHITE,
        newStoneColCoordinate: 'F',
        newStoneRowCoordinate: 3,
    });

    const expectedAlteredStones = new Set([]);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(existingStones);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('white placing a stone to kill a black stone in NW corner', () => {
    const existingStones = {
        A1: FLAGS.STONE_BLACK,
        A2: FLAGS.STONE_WHITE,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_WHITE,
        newStoneColCoordinate: 'B',
        newStoneRowCoordinate: 1,
    });

    const correctState = {
        A1: FLAGS.STONE_NONE,
        A2: FLAGS.STONE_WHITE,
        B1: FLAGS.STONE_WHITE,
    };

    const expectedAlteredStones = new Set(['A1', 'B1']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('black placing a stone to kill a white stone in SE corner', () => {
    const existingStones = {
        J9: FLAGS.STONE_WHITE,
        J8: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'H',
        newStoneRowCoordinate: 9,
    });

    const correctState = {
        J9: FLAGS.STONE_NONE,
        J8: FLAGS.STONE_BLACK,
        H9: FLAGS.STONE_BLACK,
    };

    const expectedAlteredStones = new Set(['H9', 'J9']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('black placing a stone to kill a white stone on a N side', () => {
    const existingStones = {
        E1: FLAGS.STONE_WHITE,
        D1: FLAGS.STONE_BLACK,
        E2: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'F',
        newStoneRowCoordinate: 1,
    });

    const correctState = {
        E1: FLAGS.STONE_NONE,
        E2: FLAGS.STONE_BLACK,
        D1: FLAGS.STONE_BLACK,
        F1: FLAGS.STONE_BLACK,
    };

    const expectedAlteredStones = new Set(['E1', 'F1']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('white placing a stone to kill a black triangle group in NE corner', () => {
    const existingStones = {
        G1: FLAGS.STONE_WHITE,
        G2: FLAGS.STONE_WHITE,
        H1: FLAGS.STONE_BLACK,
        H2: FLAGS.STONE_BLACK,
        J1: FLAGS.STONE_BLACK,
        J2: FLAGS.STONE_WHITE,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_WHITE,
        newStoneColCoordinate: 'H',
        newStoneRowCoordinate: 3,
    });

    const correctState = {
        G1: FLAGS.STONE_WHITE,
        G2: FLAGS.STONE_WHITE,
        H1: FLAGS.STONE_NONE,
        H2: FLAGS.STONE_NONE,
        H3: FLAGS.STONE_WHITE,
        J1: FLAGS.STONE_NONE,
        J2: FLAGS.STONE_WHITE,

    };

    const expectedAlteredStones = new Set(['H1', 'H2', 'H3', 'J1']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('white placing a stone to kill a black one eye group in center', () => {
    const existingStones = {
        D4: FLAGS.STONE_WHITE,
        D5: FLAGS.STONE_WHITE,
        D6: FLAGS.STONE_WHITE,
        E3: FLAGS.STONE_WHITE,
        E4: FLAGS.STONE_BLACK,
        E5: FLAGS.STONE_BLACK,
        E6: FLAGS.STONE_BLACK,
        E7: FLAGS.STONE_WHITE,
        F3: FLAGS.STONE_WHITE,
        F4: FLAGS.STONE_BLACK,
        F6: FLAGS.STONE_BLACK,
        F7: FLAGS.STONE_WHITE,
        G3: FLAGS.STONE_WHITE,
        G4: FLAGS.STONE_BLACK,
        G5: FLAGS.STONE_BLACK,
        G6: FLAGS.STONE_BLACK,
        G7: FLAGS.STONE_WHITE,
        H4: FLAGS.STONE_WHITE,
        H5: FLAGS.STONE_WHITE,
        H6: FLAGS.STONE_WHITE,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_WHITE,
        newStoneColCoordinate: 'F',
        newStoneRowCoordinate: 5,
    });

    const correctState = {
        D4: FLAGS.STONE_WHITE,
        D5: FLAGS.STONE_WHITE,
        D6: FLAGS.STONE_WHITE,
        E3: FLAGS.STONE_WHITE,
        E4: FLAGS.STONE_NONE,
        E5: FLAGS.STONE_NONE,
        E6: FLAGS.STONE_NONE,
        E7: FLAGS.STONE_WHITE,
        F3: FLAGS.STONE_WHITE,
        F4: FLAGS.STONE_NONE,
        F5: FLAGS.STONE_WHITE,
        F6: FLAGS.STONE_NONE,
        F7: FLAGS.STONE_WHITE,
        G3: FLAGS.STONE_WHITE,
        G4: FLAGS.STONE_NONE,
        G5: FLAGS.STONE_NONE,
        G6: FLAGS.STONE_NONE,
        G7: FLAGS.STONE_WHITE,
        H4: FLAGS.STONE_WHITE,
        H5: FLAGS.STONE_WHITE,
        H6: FLAGS.STONE_WHITE,
    };

    const expectedAlteredStones = new Set(['E4', 'E5', 'E6', 'F4', 'F5', 'F6', 'G4', 'G5', 'G6']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('white placing a stone in a textbook beginning of ko kills the appropriate black stone', () => {
    const existingStones = {
        C3: FLAGS.STONE_BLACK,
        C4: FLAGS.STONE_WHITE,
        D2: FLAGS.STONE_BLACK,
        D4: FLAGS.STONE_BLACK,
        D5: FLAGS.STONE_WHITE,
        E3: FLAGS.STONE_BLACK,
        E4: FLAGS.STONE_WHITE,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_WHITE,
        newStoneColCoordinate: 'D',
        newStoneRowCoordinate: 3,
    });

    const correctState = {
        C3: FLAGS.STONE_BLACK,
        C4: FLAGS.STONE_WHITE,
        D2: FLAGS.STONE_BLACK,
        D3: FLAGS.STONE_WHITE,
        D4: FLAGS.STONE_NONE,
        D5: FLAGS.STONE_WHITE,
        E3: FLAGS.STONE_BLACK,
        E4: FLAGS.STONE_WHITE,
    };

    const expectedAlteredStones = new Set(['D3', 'D4']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});

it('black placing a stone in a strange middle fight with two white groups dying', () => {
    const existingStones = {
        C4: FLAGS.STONE_BLACK,
        D3: FLAGS.STONE_BLACK,
        D4: FLAGS.STONE_WHITE,
        D5: FLAGS.STONE_BLACK,
        E2: FLAGS.STONE_BLACK,
        E3: FLAGS.STONE_WHITE,
        E6: FLAGS.STONE_BLACK,
        F2: FLAGS.STONE_BLACK,
        F3: FLAGS.STONE_WHITE,
        F4: FLAGS.STONE_WHITE,
        F5: FLAGS.STONE_BLACK,
        F6: FLAGS.STONE_BLACK,
        G3: FLAGS.STONE_BLACK,
        G4: FLAGS.STONE_WHITE,
        G5: FLAGS.STONE_WHITE,
        G6: FLAGS.STONE_WHITE,
        G7: FLAGS.STONE_BLACK,
        H4: FLAGS.STONE_BLACK,
        H5: FLAGS.STONE_BLACK,
        H6: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_13_x_13,
        newStoneColor: FLAGS.STONE_BLACK,
        newStoneColCoordinate: 'E',
        newStoneRowCoordinate: 4,
    });

    const correctState = {
        C4: FLAGS.STONE_BLACK,
        D3: FLAGS.STONE_BLACK,
        D5: FLAGS.STONE_BLACK,
        E2: FLAGS.STONE_BLACK,
        E4: FLAGS.STONE_BLACK,
        E6: FLAGS.STONE_BLACK,
        F2: FLAGS.STONE_BLACK,
        F5: FLAGS.STONE_BLACK,
        F6: FLAGS.STONE_BLACK,
        G3: FLAGS.STONE_BLACK,
        G7: FLAGS.STONE_BLACK,
        H4: FLAGS.STONE_BLACK,
        H5: FLAGS.STONE_BLACK,
        H6: FLAGS.STONE_BLACK,
        D4: FLAGS.STONE_NONE,
        E3: FLAGS.STONE_NONE,
        F3: FLAGS.STONE_NONE,
        F4: FLAGS.STONE_NONE,
        G4: FLAGS.STONE_NONE,
        G5: FLAGS.STONE_NONE,
        G6: FLAGS.STONE_NONE,
    };

    const expectedAlteredStones = new Set(['D4', 'E3', 'E4', 'F3', 'F4', 'G4', 'G5', 'G6']);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(correctState);
    expect(alteredStones).toEqual(expectedAlteredStones);
});


it('white placing a stone with no liberties commits suicide, a bug in the original algo', () => {
    const existingStones = {
        E4: FLAGS.STONE_BLACK,
        H1: FLAGS.STONE_BLACK,
        H2: FLAGS.STONE_BLACK,
        J1: FLAGS.STONE_NONE,
        J2: FLAGS.STONE_BLACK,
    };

    const newStonesState = GAME_MATHS.removeDeadStones({
        existingStones,
        mode: FLAGS.GAME_9_x_9,
        newStoneColor: FLAGS.STONE_WHITE,
        newStoneColCoordinate: 'J',
        newStoneRowCoordinate: 1,
    });

    const expectedAlteredStones = new Set([]);
    const alteredStones = GAME_MATHS.determineAlteredStones({
        currentBoardState: existingStones,
        nextBoardState: newStonesState,
    });

    expect(newStonesState).toEqual(existingStones);
    expect(alteredStones).toEqual(expectedAlteredStones);
});