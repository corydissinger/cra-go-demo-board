import * as TYPES from '../constants/actions';

export const setWindowDimensions = (windowWidth, windowHeight) => ({
    type: TYPES.SET_WINDOW_DIMENSIONS,
    payload: {
        windowWidth,
        windowHeight,
    },
});

export const setCapturePanelHeight = (capturesPanelHeight) => ({
    type: TYPES.SET_CAPTURE_PANEL_HEIGHT,
    payload: {
        capturesPanelHeight,
    },
});

export const setMode = mode => ({
    type: TYPES.SET_MODE,
    payload: {
        mode,
    },
});