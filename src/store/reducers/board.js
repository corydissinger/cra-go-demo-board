import * as _ from 'lodash';
import * as FLAGS from '../../game/flags';
import * as ACTIONS from '../constants/actions';

// This maintains a map of coordinates as keys to placed stones.
// the state is somewhat dynamic but predictable based on the
// generally agreed upon goban coordinates
const initialState = {
    alteredStones: new Set(),
    mode: FLAGS.GAME_9_x_9,
    koViolation: '',
    currentBoardState: {},
    previousBoardState: {},
    previousStone: '',
    penultimateStone: '', // means 'second to last', quite literally
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_MODE:
            const { mode } = action.payload;

            return {
                ...initialState,
                mode,
            };
        case ACTIONS.UPDATE_STONES:
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
        case ACTIONS.KO_WARNING:
            const {
                colCoordinate,
                rowCoordinate,
            } = action.payload;

            return {
                ...state,
                koViolation: `${colCoordinate}${rowCoordinate}`,
            };
        default:
            return state;
    }
};

export default board;