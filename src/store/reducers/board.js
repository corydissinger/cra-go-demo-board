import * as FLAGS from '../../game/flags';
import * as TYPES from '../constants/actions';

// This maintains a map of coordinates as keys to placed stones.
// the state is somewhat dynamic but predictable based on the
// generally agreed upon goban coordinates
const initialState = {
    alteredStones: new Set(),
    mode: FLAGS.GAME_9_x_9,
    currentBoardState: {},
    previousBoardState: {},
    previousStone: '',
    penultimateStone: '', // means 'second to last', quite literally
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SET_MODE:
            const { mode } = action.payload;

            return {
                ...initialState,
                mode,
            };
        case TYPES.UPDATE_STONES:
            const {
                alteredStones,
                nextBoardState,
                placedStone,
            } = action.payload;

            // ALTERED STONES GOES TO GAME MATHS
            return {
                ...state,
                alteredStones,
                koViolation: '',
                currentBoardState: nextBoardState,
                previousBoardState: state.currentBoardState,
                penultimateStone: state.previousStone,
                previousStone: placedStone,
            };
        default:
            return state;
    }
};

export default board;