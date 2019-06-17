import * as FLAGS from '../constants/flags';
import * as ACTIONS from '../constants/actions';

const initialState = {
    a1: FLAGS.STONE_NONE,
};

const board = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_MODE:
            return initialState;
        case ACTIONS.SET_STONE:
            const {
                colCoordinate,
                rowCoordinate,
                color,
            } = action.payload;

            // fancy JS YOLO who needs Types or TypeScript when you can do this
            return {
                ...state,
                [`${colCoordinate}${rowCoordinate}`]: color,
            };
        default:
            return state;
    }
};

export default board;