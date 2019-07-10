import * as FLAGS from '../../game/flags';
import * as TYPES from '../constants/actions';

// This maintains a map of coordinates as keys to placed stones.
// the state is somewhat dynamic but predictable based on the
// generally agreed upon goban coordinates
const initialState = {
    alteredStones: new Set(), //TODO: combine this and previousBoardState for historicBoardStates
    mode: FLAGS.GAME_9_x_9,
    currentBoardState: {},
    previousBoardState: {}, //TODO: After combining there should be an object/map/array of turns/history-branches to altered stones
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
            } = action.payload;

            // ALTERED STONES GOES TO GAME MATHS
            return {
                ...state,
                alteredStones,
                koViolation: '',
                currentBoardState: nextBoardState,
                previousBoardState: state.currentBoardState,
            };
        default:
            return state;
    }
};

export default board;