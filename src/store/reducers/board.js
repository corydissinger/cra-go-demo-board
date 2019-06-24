import * as FLAGS from '../../game/flags';
import * as GAME_MATHS from '../../game/maths';
import * as ACTIONS from '../constants/actions';
import * as _ from 'lodash';

// This maintains a map of coordinates as keys to placed stones.
// the state is somewhat dynamic but predictable based on the
// generally agreed upon goban coordinates
const initialState = {
    mode: FLAGS.GAME_9_x_9,
    koWarning: false,
    currentBoardState: {},
    previousBoardState: {},
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_MODE:
            const { mode } = action.payload;

            return {
                ...initialState,
                mode,
            };
        case ACTIONS.SET_STONE:
            const {
                colCoordinate,
                rowCoordinate,
                color,
            } = action.payload;

            const nextBoardState = GAME_MATHS.removeDeadStones({
                existingStones: state.currentBoardState,
                mode: state.mode,
                newStoneColor: color,
                newStoneColCoordinate: colCoordinate,
                newStoneRowCoordinate: rowCoordinate,
            });

            const koWarning = _.isEqual(state.previousBoardState, nextBoardState);

            if (koWarning) {
                return {
                    ...state,
                    koWarning,
                };
            } else {
                return {
                    mode: state.mode,
                    koWarning,
                    currentBoardState: nextBoardState,
                    previousBoardState: state.currentBoardState,
                };
            }
        default:
            return state;
    }
};

export default board;