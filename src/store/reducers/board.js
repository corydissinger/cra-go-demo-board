import * as FLAGS from '../../game/flags';
import * as GAME_MATHS from '../../game/maths';
import * as ACTIONS from '../constants/actions';

// This maintains a map of coordinates as keys to placed stones.
// the state is somewhat dynamic but predictable based on the
// generally agreed upon goban coordinates
const initialState = {
    mode: FLAGS.GAME_9_x_9,
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
                existingStones: state,
                mode: state.mode,
                newStoneColor: color,
                newStoneColCoordinate: colCoordinate,
                newStoneRowCoordinate: rowCoordinate,
            });

            // console.log(`%c Next assumed board state: ${JSON.stringify(nextBoardState)}`, 'background: #222; color: #bada55');

            return {
                mode: state.mode,
                ...nextBoardState,
            };
        default:
            return state;
    }
};

export default board;