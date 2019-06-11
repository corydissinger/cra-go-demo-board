import * as TYPES from '../constants/actions';

export const setMode = mode => ({
    type: TYPES.SET_MODE,
    payload: {
        mode,
    },
});

export const setTurnNumber = turnNumber => ({
    type: TYPES.SET_TURN_NUMBER,
    payload: {
        turnNumber,
    },
});

export const setWindowDimensions = (windowWidth, windowHeight) => ({
    type: TYPES.SET_WINDOW_DIMENSIONS,
    payload: {
        windowWidth,
        windowHeight,
    },
});

export const setConfigurationHeight = configurationHeight => ({
    type: TYPES.SET_CONFIGURATION_HEIGHT,
    payload: {
        configurationHeight,
    },
});