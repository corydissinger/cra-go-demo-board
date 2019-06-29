import * as TYPES from '../constants/actions';

export const setMode = mode => ({
    type: TYPES.SET_MODE,
    payload: {
        mode,
    },
});

export const setLastPreviewStone = coordinate => ({
    type: TYPES.SET_LAST_PREVIEW_STONE,
    payload: {
        coordinate,
    },
});

export const setWindowDimensions = (windowWidth, windowHeight) => ({
    type: TYPES.SET_WINDOW_DIMENSIONS,
    payload: {
        windowWidth,
        windowHeight,
    },
});