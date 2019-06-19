import * as FLAGS from '../constants/flags';
import * as GAME_MATHS from '../constants/gameMaths';
import * as ACTIONS from '../constants/actions';

// This maintains a map of coordinates as keys to placed stones.
// the state is somewhat dynamic but predictable based on the
// generally agreed upon goban coordinates
const initialState = {
    mode: FLAGS.GAME_9_x_9,
    // stonesPlaced: FLAGS.GRID_EMPTY_9_x_9,
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_MODE:
            const { mode } = action.payload;

            return {
                ...initialState,
                mode,
                // stonesPlaced: GAME_MATHS.getEmptyBoardConstant(mode),
            };
        case ACTIONS.SET_STONE:
            const {
                colCoordinate,
                rowCoordinate,
                color,
            } = action.payload;

            // fancy JS YOLO who needs Types or TypeScript when you can do this
            return {
                mode: state.mode,
                [`${colCoordinate}${rowCoordinate}`]: color,
            };
        default:
            return state;
    }
};

export default board;