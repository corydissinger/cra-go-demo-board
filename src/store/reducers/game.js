import * as FLAGS from '../constants/flags';
import * as ACTIONS from '../constants/actions';

const initialState = {
    canRender: false,
    mode: FLAGS.GAME_9_x_9,
    turnColor: FLAGS.TURN_BLACK,
    turnNumber: 0,
    windowHeight: null,
    windowWidth: null,
    configurationHeight: null,
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_MODE:
            return {
                ...state,
                mode: action.payload.mode,
            };
        case ACTIONS.SET_STONE:
            return {
                ...state,
                turnColor: state.turnColor === FLAGS.TURN_BLACK ? FLAGS.TURN_WHITE : FLAGS.TURN_BLACK,
                turnNumber: state.turnNumber + 1,
            };
        case ACTIONS.SET_WINDOW_DIMENSIONS:
            const {
                windowHeight,
                windowWidth,
            } = action.payload;

            return {
                ...state,
                canRender: true,
                windowHeight,
                windowWidth,
            };
        case ACTIONS.SET_CONFIGURATION_HEIGHT:
            const { configurationHeight } = action.payload;

            return {
                ...state,
                configurationHeight,
            };
        default:
            return state;
    }
};

export default game;