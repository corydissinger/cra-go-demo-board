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

export const setCapturePanelHeight = (capturesPanelHeight) => ({
    type: TYPES.SET_CAPTURE_PANEL_HEIGHT,
    payload: {
        capturesPanelHeight,
    },
});

export const incrementCaptures = ({ blackCaptures, whiteCaptures }) => ({
   type: TYPES.INCREMENT_CAPTURES,
   payload: {
       blackCaptures,
       whiteCaptures,
   }
});

export const koWarning = () => ({
    type: TYPES.KO_WARNING,
});

export const suicideWarning = () => ({
    type: TYPES.SUICIDE_WARNING,
});

export const resetWarnings = () => ({
    type: TYPES.RESET_WARNINGS,
});