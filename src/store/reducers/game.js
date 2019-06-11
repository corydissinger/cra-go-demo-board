import * as _ from 'lodash';

import * as FLAGS from '../constants/flags';
import * as ACTIONS from '../constants/actions';

const initialState = {
    mode: FLAGS.GAME_9_x_9,
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
        case ACTIONS.SET_TURN_NUMBER:
            return {
                ...state,
                turnNumber: action.payload.turnNumber,
            };
        case ACTIONS.SET_WINDOW_DIMENSIONS:
            const {
                windowHeight,
                windowWidth,
            } = action.payload;

            return {
                ...state,
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